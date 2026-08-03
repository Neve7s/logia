// ============================================================
// nvidiaApi.js — Servicio para chat con IA
// Detecta automáticamente el entorno (local vs producción)
// ============================================================

// En producción usa el Worker de Cloudflare, en local el proxy Bun
const PROXY_URL = 'https://dry-king-a9fa.hieysonhilario.workers.dev/api/chat';

/**
 * Envía un mensaje al chat de IA y retorna la respuesta
 * @param {string} message - Mensaje del usuario
 * @param {Array} history - Historial de conversación [{role, content}]
 * @param {string} systemPrompt - System prompt con contexto de LogIA
 * @returns {Promise<string>} - Respuesta del modelo
 */
export async function sendMessageToNvidia(message, history = [], systemPrompt = '') {
  const messages = [
    { role: 'system', content: systemPrompt },
    ...history,
    { role: 'user', content: message }
  ];

  try {
    const response = await fetch(PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.content || 'No pude generar una respuesta.';
  } catch (error) {
    console.error('Error en NVIDIA API:', error);
    throw error;
  }
}
