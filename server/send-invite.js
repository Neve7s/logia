import { Resend } from 'resend';
import { config } from 'dotenv';
config({ path: '../.env' });

const resend = new Resend(process.env.RESEND_API);

const { data, error } = await resend.emails.send({
  from: 'LogIA <suscriptores@logia.lat>',
  to: ['Info@cilogisticsperu.com'],
  subject: 'Invitación a conocer LogIA - Transforma tu operación logística',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 28px;">LogIA</h1>
        <p style="color: #e94560; margin: 5px 0 0; font-size: 14px;">Inteligencia Logística para tu Negocio</p>
      </div>

      <div style="background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Hola equipo de <strong>CI Logistics Perú</strong>,</p>

        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Somos <strong>LogIA</strong>, una plataforma tecnológica diseñada para potenciar la gestión logística y aduanera de empresas como la suya. Hemos visto su trayectoria en logística internacional, transporte multimodal y agenciamiento de aduana, y creemos que nuestra solución puede ser un gran aliado para seguir optimizando sus operaciones.
        </p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a1a2e; margin-top: 0;">¿Qué ofrecemos?</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #333;">📧</td>
              <td style="padding: 8px 0; color: #333;"><strong>Comunicaciones</strong> — Correos masivos profesionales con plantillas personalizadas y segmentación inteligente de clientes.</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #333;">📊</td>
              <td style="padding: 8px 0; color: #333;"><strong>Cotizador</strong> — Cotizaciones al instante con márgenes dinámicos y cálculo de flete marítimo, aéreo y terrestre.</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #333;">📦</td>
              <td style="padding: 8px 0; color: #333;"><strong>Gestión de Envíos</strong> — Tracking en tiempo real, notificaciones automáticas y control de punta a punta.</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #333;">👥</td>
              <td style="padding: 8px 0; color: #333;"><strong>RRHH</strong> — Gestión de personal, reclutamiento y evaluación de desempeño.</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #333;">🎓</td>
              <td style="padding: 8px 0; color: #333;"><strong>Academia</strong> — Capacitación en comercio exterior y logística para tu equipo.</td>
            </tr>
          </table>
        </div>

        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Su experiencia en los sectores <strong>electrónico, textil, farmacéutico, agroindustrial y automotriz</strong>, sumada a su presencia en los 5 continentes, nos hace pensar que LogIA puede aportar un valor real a su operación diaria.
        </p>

        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Nos encantaría mostrarle la plataforma y explorar juntos cómo podemos ayudarles a ser aún más eficientes.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://logia.lat" style="background: #e94560; color: #fff; text-decoration: none; padding: 14px 40px; border-radius: 6px; font-size: 16px; font-weight: bold; display: inline-block;">
            Conocer LogIA
          </a>
        </div>

        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          ¿Agendamos una llamada o videollamada para mostrarte la plataforma?<br>
          Puedes responder directamente a este correo o contactarnos al <strong>soporte@logia.lat</strong>
        </p>

        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

        <p style="color: #888; font-size: 12px; text-align: center;">
          LogIA — Inteligencia Logística<br>
          <a href="https://logia.lat" style="color: #e94560;">logia.lat</a>
        </p>
      </div>
    </div>
  `,
});

if (error) {
  console.error('Error al enviar:', error);
} else {
  console.log('✅ Correo enviado exitosamente a Info@cilogisticsperu.com');
  console.log('ID:', data?.id);
}
