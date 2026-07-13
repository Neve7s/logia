import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Terms = () => {
  return (
    <PageLayout 
      title="Términos y Condiciones"
      tagline="Acuerdo legal"
    >
      <div className="content-section">
        <p className="content-lead">
          Al acceder y utilizar la plataforma LogIA, aceptas estar sujeto a estos términos y condiciones. 
          Si no estás de acuerdo con alguna parte, no utilices el servicio.
        </p>

        <div className="content-card">
          <h2><i className="fas fa-handshake"></i> 1. Aceptación de los términos</h2>
          <p>Al crear una cuenta o utilizar LogIA, confirmas que:</p>
          <ul>
            <li>Tienes al menos 18 años de edad o la capacidad legal para celebrar contratos</li>
            <li>Has leído, comprendido y aceptado estos términos y condiciones</li>
            <li>Tienes autoridad para actuar en nombre de la empresa que representas</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-service"></i> 2. Uso del servicio</h2>
          <p>LogIA se proporciona "tal cual" y "según disponibilidad". Nos comprometemos a:</p>
          <ul>
            <li>Mantener un uptime del 99.5% medido mensualmente</li>
            <li>Proveer soporte técnico durante horario laboral</li>
            <li>Actualizar la plataforma con mejoras y correcciones periódicas</li>
          </ul>
          <p>Te comprometes a:</p>
          <ul>
            <li>Usar la plataforma de acuerdo con su propósito diseñado</li>
            <li>No intentar acceder no autorizado a sistemas o datos de otros usuarios</li>
            <li>No utilizar la plataforma para actividades ilegales o fraudulentas</li>
            <li>Mantener la confidencialidad de tus credenciales de acceso</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-credit-card"></i> 3. Suscripción y pagos</h2>
          <ul>
            <li>Las suscripciones se renuevan automáticamente al final de cada periodo</li>
            <li>Puedes cancelar en cualquier momento desde tu panel de configuración</li>
            <li>No hay reembolsos por periodos parciales ya facturados</li>
            <li>Los precios pueden cambiar con un aviso previo de 30 días</li>
            <li>Los pagos se procesan de forma segura a través de nuestros proveedores autorizados</li>
            <li>El incumplimiento de pago resultará en la suspensión del servicio después de 7 días de gracia</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-lightbulb"></i> 4. Propiedad intelectual</h2>
          <p>Todo el contenido, software, diseño, marca y logo de LogIA están protegidos por derechos de autor y otras leyes de propiedad intelectual.</p>
          <ul>
            <li>No puedes copiar, modificar o distribuir el software de LogIA</li>
            <li>Los datos que ingresas a la plataforma son de tu propiedad</li>
            <li>Te otorgamos una licencia limitada, no exclusiva y revocable para usar la plataforma</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-shield-halved"></i> 5. Limitación de responsabilidad</h2>
          <p>En ningún caso LogIA será responsable por:</p>
          <ul>
            <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos</li>
            <li>Pérdida de beneficios, datos o información comercial</li>
            <li>Interrupciones del servicio por causas de fuerza mayor</li>
            <li>Decisiones tomadas basadas en la información de la plataforma</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-pen"></i> 6. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en esta página. Te notificaremos sobre cambios significativos por correo electrónico.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-power-off"></i> 7. Terminación</h2>
          <p>Nos reservamos el derecho de suspender o terminar tu acceso al servicio por:</p>
          <ul>
            <li>Violación de estos términos y condiciones</li>
            <li>Uso indebido de la plataforma</li>
            <li>Solicitud del usuario</li>
            <li>Inactividad prolongada de la cuenta (más de 12 meses sin login)</li>
          </ul>
        </div>

        <p className="content-update">
          <i className="fas fa-calendar"></i> Última actualización: Julio 2025
        </p>
      </div>
    </PageLayout>
  );
};

export default Terms;
