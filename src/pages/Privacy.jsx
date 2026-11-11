import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { LegalSection } from '../components/layout/LegalPage';

const sections = [
  { id: 'responsable', title: 'Responsable del tratamiento' },
  { id: 'datos-recopilados', title: 'Datos que recopilamos' },
  { id: 'finalidades', title: 'Finalidades del tratamiento' },
  { id: 'base-legal', title: 'Base legal' },
  { id: 'cookies', title: 'Cookies y tecnologías similares' },
  { id: 'conservacion', title: 'Plazo de conservación' },
  { id: 'transferencias', title: 'Encargados y transferencias' },
  { id: 'seguridad', title: 'Seguridad de la información' },
  { id: 'derechos', title: 'Tus derechos' },
  { id: 'menores', title: 'Menores de edad' },
  { id: 'cambios', title: 'Cambios en esta política' },
  { id: 'contacto', title: 'Contacto' },
];

const Privacy = () => {
  return (
    <LegalPage
      title="Política de Privacidad"
      shortTitle="Privacidad"
      tagline="Compromiso con tu seguridad"
      updated="10 de noviembre de 2026"
      version="3.0"
      sections={sections}
      intro="En LogIA protegemos la información de tu empresa y de las personas que la integran. Esta política explica qué datos tratamos, para qué los usamos, cuánto tiempo los conservamos y cómo puedes ejercer tus derechos."
    >
      <div className="legal-callout">
        <h2><i className="fas fa-circle-info" aria-hidden="true"></i> Lo esencial</h2>
        <ul>
          <li>Cada empresa opera en un entorno separado y sus datos no se mezclan con los de otras empresas.</li>
          <li>No vendemos datos personales ni los usamos para publicidad de terceros.</li>
          <li>Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a privacidad@logia.lat.</li>
          <li>Tratamos los datos conforme a la Ley N.º 29733 de Protección de Datos Personales del Perú.</li>
        </ul>
      </div>

      <LegalSection id="responsable" number="01" title="Responsable del tratamiento" icon="fas fa-building-columns">
        <p>
          El responsable del tratamiento es <strong>LogIA</strong>, con domicilio en Lima, Perú.
          Para asuntos de privacidad puedes escribir a{' '}
          <a href="mailto:privacidad@logia.lat">privacidad@logia.lat</a>.
        </p>
        <p>
          Cuando una empresa carga datos de sus clientes, colaboradores o proveedores, la empresa
          actúa como titular o responsable y LogIA como encargada del tratamiento, siguiendo sus
          instrucciones y las medidas de seguridad aplicables.
        </p>
      </LegalSection>

      <LegalSection id="datos-recopilados" number="02" title="Datos que recopilamos" icon="fas fa-database">
        <div className="legal-table-wrapper">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Categoría</th>
                <th scope="col">Ejemplos</th>
                <th scope="col">Origen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificación</td>
                <td>Nombre, DNI, cargo, usuario</td>
                <td>Registro del usuario</td>
              </tr>
              <tr>
                <td>Contacto</td>
                <td>Correo, teléfono, dirección</td>
                <td>Registro y uso del Servicio</td>
              </tr>
              <tr>
                <td>Empresa</td>
                <td>Razón social, RUC, logo, configuración</td>
                <td>Registro y módulos de configuración</td>
              </tr>
              <tr>
                <td>Facturación</td>
                <td>Plan, comprobantes, datos de pago tokenizados</td>
                <td>Contratación y pasarela de pagos</td>
              </tr>
              <tr>
                <td>Operación</td>
                <td>Cotizaciones, embarques, comprobantes, candidatos</td>
                <td>Uso de los módulos por el Cliente</td>
              </tr>
              <tr>
                <td>Uso y seguridad</td>
                <td>Registros de acceso, IP, navegador, eventos</td>
                <td>Operación técnica del Servicio</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No solicitamos datos sensibles para el uso general de la Plataforma. Si un módulo permitiera
          registrar información sensible, el Cliente deberá contar con la base legal y las
          autorizaciones correspondientes.
        </p>
      </LegalSection>

      <LegalSection id="finalidades" number="03" title="Finalidades del tratamiento" icon="fas fa-bullseye">
        <ul>
          <li>Crear y administrar la cuenta de la empresa y de sus usuarios.</li>
          <li>Prestar los módulos contratados y generar documentos, reportes y comunicaciones.</li>
          <li>Procesar pagos, emitir comprobantes y gestionar la relación comercial.</li>
          <li>Brindar soporte, atender consultas y resolver incidencias.</li>
          <li>Enviar avisos operativos, de seguridad y cambios relevantes del Servicio.</li>
          <li>Mejorar la Plataforma mediante métricas agregadas y análisis de uso.</li>
          <li>Cumplir obligaciones legales, contables y regulatorias.</li>
          <li>Prevenir fraudes, abusos y accesos no autorizados.</li>
        </ul>
        <p>
          No utilizamos los datos del Cliente para fines distintos a los descritos sin su
          autorización, salvo obligación legal.
        </p>
      </LegalSection>

      <LegalSection id="base-legal" number="04" title="Base legal" icon="fas fa-scale-balanced">
        <p>El tratamiento se sustenta, según el caso, en:</p>
        <ul>
          <li>La ejecución del contrato o de medidas precontractuales.</li>
          <li>El consentimiento del titular para comunicaciones comerciales o fines opcionales.</li>
          <li>El interés legítimo en la seguridad, prevención de fraude y mejora del Servicio.</li>
          <li>El cumplimiento de obligaciones legales y tributarias.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" number="05" title="Cookies y tecnologías similares" icon="fas fa-cookie-bite">
        <p>
          Utilizamos cookies necesarias para la sesión, la seguridad y el funcionamiento de la
          Plataforma, y cookies de preferencias para recordar configuraciones. El detalle y la forma
          de gestionarlas se encuentran en la <Link to="/cookies">Política de Cookies</Link>.
        </p>
        <p>
          Puedes configurar tu navegador para bloquear cookies, aunque algunas funcionalidades
          podrían dejar de operar correctamente.
        </p>
      </LegalSection>

      <LegalSection id="conservacion" number="06" title="Plazo de conservación" icon="fas fa-clock">
        <ul>
          <li>Los datos de cuenta se conservan mientras la Suscripción esté vigente.</li>
          <li>Tras la terminación, el Cliente puede exportar sus datos dentro de 30 días.</li>
          <li>Luego de 90 días, los datos pueden eliminarse o anonimizarse de forma segura.</li>
          <li>Los registros de facturación y ciertos logs se conservan por los plazos legales aplicables.</li>
          <li>Los datos de la prueba gratuita no convertida se conservan hasta 30 días y luego se eliminan.</li>
        </ul>
      </LegalSection>

      <LegalSection id="transferencias" number="07" title="Encargados y transferencias" icon="fas fa-share-nodes">
        <p>
          Podemos compartir información con proveedores que prestan servicios de infraestructura,
          correo, pagos, monitoreo y soporte, bajo obligaciones de confidencialidad y seguridad.
          Estos proveedores actúan como encargados del tratamiento.
        </p>
        <p>
          Algunos proveedores pueden alojar datos fuera de Perú. En esos casos aplicamos medidas
          contractuales y verificamos un nivel adecuado de protección, conforme a la normativa
          peruana. No vendemos ni alquilamos datos personales.
        </p>
        <p>
          También podemos divulgar información cuando exista una orden judicial, requerimiento de
          autoridad competente o para proteger derechos de LogIA o de terceros.
        </p>
      </LegalSection>

      <LegalSection id="seguridad" number="08" title="Seguridad de la información" icon="fas fa-lock">
        <ul>
          <li>Cifrado de datos en tránsito mediante TLS y controles de cifrado en reposo.</li>
          <li>Aislamiento lógico de la información por empresa.</li>
          <li>Control de accesos por roles y principio de mínimo privilegio.</li>
          <li>Copias de seguridad periódicas y procedimientos de recuperación.</li>
          <li>Registro de eventos, monitoreo y revisión de accesos.</li>
          <li>Capacitación y acuerdos de confidencialidad con el personal.</li>
        </ul>
        <p>
          Ningún sistema es completamente infalible. Si se detecta un incidente que afecte datos
          personales, LogIA notificará a los afectados y a la autoridad cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection id="derechos" number="09" title="Tus derechos" icon="fas fa-user-check">
        <p>Como titular de datos personales puedes ejercer los derechos de:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos y cómo los usamos.</li>
          <li><strong>Rectificación:</strong> actualizar o corregir información inexacta.</li>
          <li><strong>Cancelación:</strong> solicitar la eliminación cuando ya no sea necesaria.</li>
          <li><strong>Oposición:</strong> oponerte a tratamientos específicos.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado cuando sea aplicable.</li>
          <li><strong>Revocación del consentimiento:</strong> retirar una autorización previa.</li>
        </ul>
        <p>
          Envía tu solicitud a <a href="mailto:privacidad@logia.lat">privacidad@logia.lat</a> indicando
          tu nombre, documento de identidad y el derecho que deseas ejercer. Responderemos dentro de
          los plazos legales. También puedes acudir a la Autoridad Nacional de Protección de Datos
          Personales del Perú.
        </p>
      </LegalSection>

      <LegalSection id="menores" number="10" title="Menores de edad" icon="fas fa-child-reaching">
        <p>
          La Plataforma está dirigida a empresas y personas mayores de 18 años. No recolectamos
          conscientemente datos de menores. Si detectamos un registro no autorizado, procederemos a
          su eliminación.
        </p>
      </LegalSection>

      <LegalSection id="cambios" number="11" title="Cambios en esta política" icon="fas fa-rotate">
        <p>
          Podemos actualizar esta política para reflejar cambios legales, técnicos u operativos. La
          versión vigente se publica en esta página con su fecha de actualización. Los cambios
          materiales se comunicarán por correo o mediante aviso en la Plataforma.
        </p>
      </LegalSection>

      <LegalSection id="contacto" number="12" title="Contacto" icon="fas fa-envelope">
        <p>Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos:</p>
        <ul>
          <li><strong>Privacidad:</strong> privacidad@logia.lat</li>
          <li><strong>Soporte:</strong> soporte@logia.lat</li>
          <li><strong>WhatsApp:</strong> +51 977 824 138</li>
          <li><strong>Domicilio:</strong> Lima, Perú</li>
        </ul>
        <p>
          También puedes revisar los <Link to="/terminos">Términos y Condiciones</Link> y la{' '}
          <Link to="/cookies">Política de Cookies</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default Privacy;
