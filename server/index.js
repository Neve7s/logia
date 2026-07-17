import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// --- Rate Limiting (in-memory) ---
const rateLimit = new Map();
const MAX_REQUESTS = 2;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutos

function getClientIP(req) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.start > WINDOW_MS) {
    rateLimit.set(ip, { start: now, count: 1 });
    return false;
  }

  record.count++;
  return record.count > MAX_REQUESTS;
}

// Limpiar registros viejos cada 5 minutos
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimit) {
    if (now - record.start > WINDOW_MS) rateLimit.delete(ip);
  }
}, 5 * 60 * 1000);

// --- XSS protection: escape HTML ---
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- Server ---
Bun.serve({
  port: 3001,
  async fetch(req) {
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (req.method === 'POST' && new URL(req.url).pathname === '/api/contact') {
      const ip = getClientIP(req);

      // Rate limit check
      if (isRateLimited(ip)) {
        return new Response(
          JSON.stringify({ error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
          return new Response(
            JSON.stringify({ error: 'Todos los campos son requeridos' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return new Response(
            JSON.stringify({ error: 'Correo electrónico inválido' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (name.length > 100 || message.length > 2000) {
          return new Response(
            JSON.stringify({ error: ' Campos exceden el límite de caracteres' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const subjectLabels = {
          soporte: 'Soporte Técnico',
          facturacion: 'Facturación',
          ventas: 'Ventas',
          otros: 'Otros'
        };

        // Escape all user input before embedding in HTML
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subjectLabels[subject] || subject);
        const safeMessage = escapeHtml(message);

        const { data, error } = await resend.emails.send({
          from: 'LogIA Contacto <suscriptores@logia.lat>',
          to: ['nosyeih@gmail.com'],
          subject: `[LogIA] ${safeSubject}`,
          html: `
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
          `,
          reply_to: email,
        });

        if (error) {
          console.error('Resend error:', error);
          return new Response(
            JSON.stringify({ error: 'Error al enviar el correo' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ success: true, data }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        console.error('Server error:', err);
        return new Response(
          JSON.stringify({ error: 'Error interno del servidor' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log('🚀 API Server running on http://localhost:3001');
