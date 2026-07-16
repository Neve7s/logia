import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Privacy = () => {
  return (
    <PageLayout 
      title="Política de Privacidad"
      tagline="Compromiso con tu seguridad"
    >
      <div className="content-section">
        <p className="content-lead">
          En LogIA, la protección de datos de nuestros usuarios es nuestra máxima prioridad. 
          Esta política describe cómo recopilamos, utilizamos y protegemos tu información personal.
        </p>

        <div className="content-card">
          <h2><i className="fas fa-database"></i> 1. Información que recopilamos</h2>
          <p>Recopilamos información personal que nos proporcionas voluntariamente al utilizar nuestra plataforma:</p>
          <ul>
            <li><strong>Datos de identificación:</strong> nombre completo, número de documento (DNI/RUC), cargo</li>
            <li><strong>Datos de contacto:</strong> correo electrónico, número de teléfono</li>
            <li><strong>Datos de la empresa:</strong> razón social, RUC, dirección, logo corporativo</li>
            <li><strong>Datos de facturación:</strong> información de tarjeta de crédito y dirección de facturación</li>
            <li><strong>Datos de uso:</strong> logs de actividad, preferencias y configuraciones</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-cogs"></i> 2. Uso de la información</h2>
          <p>Utilizamos tu información exclusivamente para:</p>
          <ul>
            <li>Proporcionar y mantener el servicio de la plataforma</li>
            <li>Procesar transacciones y generar comprobantes de pago</li>
            <li>Enviarte notificaciones sobre cambios en el servicio</li>
            <li>Proporcionar soporte técnico y atención al cliente</li>
            <li>Mejorar la experiencia del usuario y desarrollar nuevas funcionalidades</li>
            <li>Cumplir con obligaciones legales y regulatorias (SUNAT, etc.)</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-lock"></i> 3. Seguridad de datos</h2>
          <p>Implementamos medidas de seguridad de grado corporativo para proteger tu información:</p>
          <ul>
            <li>Encriptación AES-256 en reposo y TLS 1.3 en tránsito</li>
            <li>Aislamiento completo de datos por agencia (cada empresa tiene su propio entorno seguro)</li>
            <li>Copias de seguridad automáticas diarias en servidores geográficamente distribuidos</li>
            <li>Auditorías de seguridad periódicas y pruebas de penetración</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-share-nodes"></i> 4. Compartir información</h2>
          <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto:</p>
          <ul>
            <li>Cuando sea requerido por una orden judicial o autoridad competente</li>
            <li>Con proveedores de servicios que nos ayudan a operar la plataforma (procesadores de pago, hosting)</li>
            <li>En caso de fusión, adquisición o venta de activos de la empresa</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-cookie-bite"></i> 5. Cookies</h2>
          <p>Utilizamos cookies y tecnologías similares para:</p>
          <ul>
            <li>Mantener tu sesión activa y segura</li>
            <li>Recordar tus preferencias de usuario</li>
            <li>Analizar el tráfico y uso de la plataforma para mejorar el servicio</li>
          </ul>
          <p>Puedes configurar tu navegador para rechazar todas las cookies, aunque esto podría afectar la funcionalidad de la plataforma.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-user-check"></i> 6. Tus derechos</h2>
          <p>Como usuario de LogIA, tienes derecho a:</p>
          <ul>
            <li>Acceder a tu información personal almacenada</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tu cuenta y datos personales</li>
            <li>Exportar tus datos en formato estándar</li>
            <li>Oponerte al procesamiento de tu información para ciertos fines</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-envelope"></i> 7. Contacto</h2>
          <p>Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos, contáctanos:</p>
          <ul>
            <li><strong>Correo:</strong> privacidad@logia.lat</li>
            <li><strong>WhatsApp:</strong> +51 977 824 138</li>
          </ul>
        </div>

        <p className="content-update">
          <i className="fas fa-calendar"></i> Última actualización: Julio 2025
        </p>
      </div>
    </PageLayout>
  );
};

export default Privacy;
