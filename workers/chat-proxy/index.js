// ============================================================
// Cloudflare Worker — Proxy para NVIDIA NIM API
// Despliega en: https://dash.cloudflare.com → Workers
// ============================================================

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Rate limit best-effort (por isolate).
const rateLimit = new Map();
const MAX_REQUESTS = 2;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record || now - record.start > WINDOW_MS) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }
  record.count += 1;
  return record.count > MAX_REQUESTS;
}

// ── Contacto (Resend) ─────────────────────────────────────────
async function handleContact(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (isRateLimited(ip)) {
    return json({ error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.' }, 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  const { name, email, subject, message } = body || {};
  if (!name || !email || !subject || !message) {
    return json({ error: 'Todos los campos son requeridos' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json({ error: 'Correo electrónico inválido' }, 400);
  }

  if (String(name).length > 100 || String(message).length > 2000) {
    return json({ error: 'Los campos exceden el límite de caracteres' }, 400);
  }

  if (!env.RESEND_API) {
    console.error('Missing RESEND_API secret');
    return json({ error: 'Servicio de correo no configurado' }, 500);
  }

  const subjectLabels = {
    soporte: 'Soporte Técnico',
    facturacion: 'Facturación',
    ventas: 'Ventas',
    otros: 'Otros',
  };

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subjectLabels[subject] || subject);
  const safeMessage = escapeHtml(message);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
        Nuevo mensaje de contacto
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">Nombre:</td>
          <td style="padding: 10px; color: #333;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 10px; color: #333;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #555;">Asunto:</td>
          <td style="padding: 10px; color: #333;">${safeSubject}</td>
        </tr>
      </table>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1a1a2e; margin-top: 0;">Mensaje:</h3>
        <p style="color: #333; line-height: 1.6;">${safeMessage}</p>
      </div>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #888; font-size: 12px; text-align: center;">
        Enviado desde el formulario de contacto de LogIA
      </p>
    </div>
  `;

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL || 'LogIA Contacto <suscriptores@logia.lat>',
      to: [env.CONTACT_TO_EMAIL || 'soporte@logia.lat'],
      subject: `[LogIA] ${safeSubject}`,
      html,
      reply_to: email,
    }),
  });

  const data = await resendRes.json().catch(() => ({}));

  if (!resendRes.ok) {
    console.error('Resend error:', resendRes.status, data);
    return json({ error: 'Error al enviar el correo' }, 502);
  }

  return json({ success: true, id: data?.id || null });
}

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

    const { pathname } = new URL(request.url);

    if (request.method === 'GET' && pathname === '/api/health') {
      return json({
        ok: true,
        service: 'logia-chat-proxy',
        emailConfigured: Boolean(env.RESEND_API),
      });
    }

    if (request.method === 'POST' && pathname === '/api/contact') {
      try {
        return await handleContact(request, env);
      } catch (err) {
        console.error('Contact error:', err);
        return json({ error: 'Error interno del servidor' }, 500);
      }
    }

    if (request.method === 'POST' && pathname === '/api/chat') {
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
