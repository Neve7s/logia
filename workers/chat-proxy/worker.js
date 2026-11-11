// ============================================================
// Cloudflare Worker — Proxy para NVIDIA NIM API
// Despliega en: https://dash.cloudflare.com → Workers
// ============================================================

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Modelos en orden de preferencia. El primero es el que pide el frontend (remap EOL incluido).
const FALLBACK_MODELS = [
  'nvidia/nemotron-3-super-120b-a12b',
  'meta/llama-3.2-11b-vision-instruct',
];

function getTopP(model) {
  // kimi-k3 exige 0.95, resto 0.9
  if (model === 'moonshotai/kimi-k3') return 0.95;
  return 0.9;
}

async function callNvidia(model, messages, apiKey) {
  const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.2,
      max_tokens: 1024,
      top_p: getTopP(model),
      stream: false,
    }),
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = null; }
  return { ok: res.ok, status: res.status, text, json };
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method === 'POST' && new URL(request.url).pathname === '/api/chat') {
      try {
        const body = await request.json();
        let { messages, model = 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning' } = body;
        if (model === 'nvidia/nemotron-3-nano-30b-a3b' || model === 'nvidia/nemotron-3-super-120b-a12b') model = 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning';

        if (!messages || !Array.isArray(messages)) {
          return new Response(
            JSON.stringify({ error: 'Messages array es requerido' }),
            { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
          );
        }

        // Limitar historial para evitar 503 por contexto enorme: system + últimos 10 turnos
        if (messages.length > 12) {
          const sys = messages[0]?.role === 'system' ? [messages[0]] : [];
          const rest = messages.slice(-10);
          messages = sys[0] ? [...sys, ...rest.filter(m => m.role !== 'system')] : rest;
        }

        if (!env.NVIDIA_API_KEY) {
          console.error('Missing NVIDIA_API_KEY');
          return new Response(
            JSON.stringify({ error: 'Error interno del servidor', detail: 'Missing NVIDIA_API_KEY' }),
            { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
          );
        }

        const candidates = [model, ...FALLBACK_MODELS.filter(m => m !== model)];

        let lastError = null;
        let lastStatus = 502;

        for (const cand of candidates) {
          const { ok, status, text, json } = await callNvidia(cand, messages, env.NVIDIA_API_KEY);

          if (ok) {
            const content = json?.choices?.[0]?.message?.content || 'Sin respuesta';
            return new Response(
              JSON.stringify({ success: true, content, model: cand }),
              { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
            );
          }

          const detail = json?.detail || json?.title || json?.error?.message || json?.message || text;
          console.error(`NVIDIA API error ${cand}:`, status, detail);
          lastError = detail;
          lastStatus = status;

          // Solo reintentar con fallback si es error transitorio o modelo no disponible
          const isRetryable = status === 503 || status === 429 || status === 529 || status === 410 || status === 404 || (typeof detail === 'string' && /overloaded|ResourceExhausted|rate/i.test(detail));
          if (!isRetryable) {
            return new Response(
              JSON.stringify({ error: 'Error al consultar la IA', detail, status }),
              { status: 502, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
            );
          }
          // si es retryable, probar siguiente candidato
        }

        return new Response(
          JSON.stringify({ error: 'Error al consultar la IA', detail: lastError, status: lastStatus }),
          { status: 502, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        console.error('Worker error:', err);
        return new Response(
          JSON.stringify({ error: 'Error interno del servidor', detail: String(err?.message || err) }),
          { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
