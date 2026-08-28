// ============================================================
// Cloudflare Worker — Proxy para NVIDIA NIM API
// Despliega en: https://dash.cloudflare.com → Workers
// ============================================================

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    // Solo permitir POST a /api/chat
    if (request.method === 'POST' && new URL(request.url).pathname === '/api/chat') {
      try {
        const body = await request.json();
        const { messages, model = 'nvidia/nemotron-3-nano-30b-a3b' } = body;

        if (!messages || !Array.isArray(messages)) {
          return new Response(
            JSON.stringify({ error: 'Messages array es requerido' }),
            { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
          );
        }

        // Llamar a NVIDIA API
        const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.NVIDIA_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 0.9,
            stream: false,
          }),
        });

        if (!response.ok) {
          const error = await response.text();
          console.error('NVIDIA API error:', error);
          return new Response(
            JSON.stringify({ error: 'Error al consultar la IA' }),
            { status: 502, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
          );
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content || 'Sin respuesta';

        return new Response(
          JSON.stringify({ success: true, content }),
          { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        console.error('Worker error:', err);
        return new Response(
          JSON.stringify({ error: 'Error interno del servidor' }),
          { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
