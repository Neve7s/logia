import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { LegalSection } from '../components/layout/LegalPage';

const sections = [
  { id: 'informacion-general', title: 'Información general' },
  { id: 'aceptacion', title: 'Aceptación de los Términos' },
  { id: 'definiciones', title: 'Definiciones' },
  { id: 'descripcion-servicio', title: 'Descripción del Servicio' },
  { id: 'registro-cuentas', title: 'Registro, cuentas y seguridad' },
  { id: 'uso-aceptable', title: 'Uso aceptable' },
  { id: 'planes-pagos', title: 'Planes, precios y pagos' },
  { id: 'prueba-gratuita', title: 'Prueba gratuita' },
  { id: 'nivel-servicio', title: 'Nivel de servicio y soporte' },
  { id: 'propiedad-intelectual', title: 'Propiedad intelectual' },
  { id: 'datos-personales', title: 'Datos personales y confidencialidad' },
  { id: 'contenido-terceros', title: 'Contenido del Cliente y terceros' },
  { id: 'responsabilidad', title: 'Limitación de responsabilidad' },
  { id: 'indemnizacion', title: 'Indemnización' },
  { id: 'terminacion', title: 'Suspensión y terminación' },
  { id: 'modificaciones', title: 'Modificaciones' },
  { id: 'ley-aplicable', title: 'Ley aplicable y controversias' },
  { id: 'contacto', title: 'Contacto y notificaciones' },
];

const Terms = () => {
  return (
    <LegalPage
      title="Términos y Condiciones"
      shortTitle="Términos y Condiciones"
      tagline="Acuerdo legal de uso"
      updated="10 de noviembre de 2026"
      version="3.0"
      sections={sections}
      intro="Estos Términos y Condiciones regulan el acceso y uso de la plataforma LogIA, sus módulos, la demo pública y los servicios asociados. Léelos con atención antes de crear una cuenta o contratar un plan."
    >
      <div className="legal-callout">
        <h2><i className="fas fa-circle-info" aria-hidden="true"></i> Resumen rápido</h2>
        <ul>
          <li>La plataforma se contrata por suscripción y se renueva automáticamente salvo cancelación.</li>
          <li>La prueba gratuita dura 14 días y no requiere tarjeta de crédito.</li>
          <li>Los datos de tu empresa son de tu propiedad y se mantienen aislados por empresa.</li>
          <li>LogIA no sustituye la asesoría contable, tributaria o legal de tu empresa.</li>
        </ul>
        <p>
          Este resumen es informativo y no reemplaza el texto completo de los Términos.
          Para datos personales, revisa la <Link to="/privacidad">Política de Privacidad</Link>; para
          cookies, la <Link to="/cookies">Política de Cookies</Link>.
        </p>
      </div>

      <LegalSection id="informacion-general" number="01" title="Información general" icon="fas fa-building-columns">
        <p>
          El Servicio es operado comercialmente bajo el nombre <strong>LogIA</strong>, con domicilio
          en Lima, Perú. Las referencias a “LogIA”, “nosotros” o “el Prestador” designan al titular
          de la plataforma; “Cliente”, “tú” o “usuario” designan a la persona natural o jurídica que
          accede o contrata el Servicio.
        </p>
        <p>
          Los canales oficiales de contacto son <a href="mailto:soporte@logia.lat">soporte@logia.lat</a> y
          el WhatsApp <a href="https://wa.me/51977824138" target="_blank" rel="noopener noreferrer">+51 977 824 138</a>.
          Los datos registrales y tributarios del Prestador se consignan en la propuesta comercial,
          la orden de servicio o el contrato que corresponda.
        </p>
        <p>
          Estos Términos se interpretan junto con la Política de Privacidad, la Política de Cookies y
          cualquier anexo, propuesta u orden de servicio aceptada por el Cliente.
        </p>
      </LegalSection>

      <LegalSection id="aceptacion" number="02" title="Aceptación de los Términos" icon="fas fa-file-signature">
        <p>Al crear una cuenta, acceder a la demo o contratar un plan, confirmas que:</p>
        <ul>
          <li>Tienes al menos 18 años y capacidad legal para obligarte contractualmente.</li>
          <li>Has leído y aceptado estos Términos, la Política de Privacidad y la Política de Cookies.</li>
          <li>Si actúas por una empresa, cuentas con facultades suficientes para representarla.</li>
          <li>La información que proporcionas es veraz, completa y se mantiene actualizada.</li>
        </ul>
        <p>
          Si no aceptas estos Términos, no debes registrarte ni utilizar el Servicio. La aceptación
          puede realizarse mediante clic en el registro, la firma de una orden de servicio o el uso
          continuado de la plataforma.
        </p>
      </LegalSection>

      <LegalSection id="definiciones" number="03" title="Definiciones" icon="fas fa-book">
        <ul className="legal-definitions">
          <li><strong>Plataforma:</strong> el sitio web logia.lat, la aplicación app.logia.lat y la demo demo.logia.lat.</li>
          <li><strong>Servicio:</strong> los módulos, funcionalidades, integraciones y soporte contratados.</li>
          <li><strong>Cliente:</strong> la empresa o persona que contrata el Servicio.</li>
          <li><strong>Usuario:</strong> toda persona autorizada por el Cliente para acceder a su cuenta.</li>
          <li><strong>Datos del Cliente:</strong> información que el Cliente o sus Usuarios cargan en la Plataforma.</li>
          <li><strong>Contenido:</strong> textos, documentos, PDFs, correos, imágenes y demás material generado o almacenado.</li>
          <li><strong>Suscripción:</strong> el derecho de uso del Servicio durante un periodo determinado.</li>
          <li><strong>Día hábil:</strong> lunes a viernes, excluyendo feriados en Perú.</li>
        </ul>
      </LegalSection>

      <LegalSection id="descripcion-servicio" number="04" title="Descripción del Servicio" icon="fas fa-layer-group">
        <p>
          LogIA es una plataforma de gestión para agencias de carga, operadores logísticos y agencias de aduanas que integra módulos de cotización,
          seguimiento de embarques, facturación electrónica, datos maestros, reclutamiento,
          comunicaciones, consulta de comercio exterior y métricas de gestión.
        </p>
        <p>El alcance contratado se detalla en el plan elegido y puede incluir:</p>
        <ul>
          <li>Cotizador profesional con búsqueda de clientes por RUC, detalle de carga (FCL, LCL, aéreo; pallets, bultos y contenedores), cálculo de servicios, IGV y derechos arancelarios.</li>
          <li>Control de embarques, canal aduanero y documentos PDF con marca del Cliente.</li>
          <li>Facturación electrónica mediante OSE/PSE, con identificación de detracciones desde la cotización, emisión de fletes exonerados e inafectos y reportes de cobranza.</li>
          <li>Base maestra de clientes, navieras, puertos y servicios.</li>
          <li>Portal de empleo y gestión de candidatos (ATS).</li>
          <li>Campañas de correo y comunicaciones transaccionales.</li>
          <li>Consultador de importadores con información de fuentes públicas.</li>
          <li>Paneles de indicadores, personalización de marca y gestión de usuarios.</li>
        </ul>
        <p>
          Algunas funcionalidades dependen de servicios de terceros (SUNAT, OSE/PSE, navieras,
          proveedores de correo o infraestructura). LogIA no controla su disponibilidad y puede
          ajustar integraciones para mantener la continuidad del Servicio.
        </p>
        <p>
          LogIA es una herramienta de gestión. No presta asesoría contable, tributaria, aduanera o
          legal. Las decisiones que el Cliente adopte a partir de la información de la Plataforma son
          de su exclusiva responsabilidad.
        </p>
      </LegalSection>

      <LegalSection id="registro-cuentas" number="05" title="Registro, cuentas y seguridad" icon="fas fa-user-shield">
        <ul>
          <li>El Cliente debe proporcionar datos veraces y mantener actualizada la información de su empresa y usuarios.</li>
          <li>Cada empresa recibe un entorno separado; no está permitido compartir credenciales entre empresas.</li>
          <li>El Cliente designa a sus administradores y es responsable de los roles y permisos que asigne.</li>
          <li>Las credenciales son personales e intransferibles. Deben comunicarse de inmediato accesos no autorizados.</li>
          <li>LogIA puede verificar el RUC u otros datos de identidad y suspender cuentas con información falsa.</li>
          <li>El Cliente debe aplicar medidas razonables de seguridad en sus equipos, correo y red.</li>
        </ul>
      </LegalSection>

      <LegalSection id="uso-aceptable" number="06" title="Uso aceptable" icon="fas fa-ban">
        <p>El Cliente y sus Usuarios se comprometen a no:</p>
        <ul>
          <li>Usar la Plataforma para actividades ilícitas, fraudulentas o contrarias a la buena fe.</li>
          <li>Acceder sin autorización a sistemas, cuentas o datos de terceros.</li>
          <li>Extraer, copiar o automatizar la recolección masiva de datos sin autorización escrita.</li>
          <li>Realizar ingeniería inversa, descompilar o intentar obtener el código fuente.</li>
          <li>Introducir malware, ejecutar pruebas de carga abusivas o interferir con la seguridad.</li>
          <li>Enviar comunicaciones masivas no consentidas o suplantar la identidad de terceros.</li>
          <li>Revender, sublicenciar o poner el Servicio a disposición de terceros no autorizados.</li>
          <li>Eludir límites de usuarios, almacenamiento o funcionalidades del plan contratado.</li>
        </ul>
        <p>
          El uso indebido faculta a LogIA a suspender el acceso, previa comunicación cuando sea
          posible, sin perjuicio de las acciones legales que correspondan.
        </p>
      </LegalSection>

      <LegalSection id="planes-pagos" number="07" title="Planes, precios y pagos" icon="fas fa-credit-card">
        <div className="legal-table-wrapper">
          <table className="legal-table">
            <caption>Planes de referencia publicados en logia.lat</caption>
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Precio base</th>
                <th scope="col">Usuarios incluidos</th>
                <th scope="col">Usuario adicional</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Básico</td><td>A consultar</td><td>Hasta 6</td><td>A consultar</td></tr>
              <tr><td>Estándar</td><td>A consultar</td><td>Hasta 10</td><td>A consultar</td></tr>
              <tr><td>Premium</td><td>A consultar</td><td>Hasta 15</td><td>A consultar</td></tr>
              <tr><td>Personalizado</td><td>Según propuesta</td><td>Según propuesta</td><td>Según propuesta</td></tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li>Los precios se expresan en dólares estadounidenses (USD) y no incluyen IGV ni otros tributos aplicables.</li>
          <li>La Suscripción se renueva automáticamente al final de cada periodo, salvo cancelación previa.</li>
          <li>El Cliente puede cancelar en cualquier momento; la cancelación surte efecto al final del periodo ya pagado.</li>
          <li>No se otorgan reembolsos por periodos parciales, salvo disposición legal imperativa.</li>
          <li>Los cambios de plan se aplican de forma prorrateada cuando impliquen un mayor valor.</li>
          <li>Los precios pueden actualizarse con un aviso previo de al menos 30 días calendario.</li>
          <li>El incumplimiento de pago genera un periodo de gracia de 7 días; luego el Servicio puede suspenderse.</li>
          <li>Los pagos se procesan mediante proveedores autorizados; LogIA no almacena datos completos de tarjetas.</li>
        </ul>
      </LegalSection>

      <LegalSection id="prueba-gratuita" number="08" title="Prueba gratuita" icon="fas fa-gift">
        <ul>
          <li>La prueba gratuita tiene una duración de 14 días calendario y no exige tarjeta de crédito.</li>
          <li>Durante la prueba se habilita el equivalente funcional del plan Estándar, salvo indicación distinta.</li>
          <li>La prueba es única por empresa y puede estar sujeta a validación de identidad o RUC.</li>
          <li>LogIA puede ajustar o finalizar la prueba por uso abusivo o incumplimiento de estos Términos.</li>
          <li>Si no se contrata un plan, los datos podrán conservarse por 30 días y luego eliminarse.</li>
        </ul>
      </LegalSection>

      <LegalSection id="nivel-servicio" number="09" title="Nivel de servicio y soporte" icon="fas fa-gauge-high">
        <p>
          LogIA procurará mantener una disponibilidad mensual de al menos 99.5%, medida sobre el
          Servicio principal y excluyendo mantenimientos programados, fuerza mayor, fallas de
          internet del Cliente y servicios de terceros.
        </p>
        <ul>
          <li>El soporte se brinda en español, de lunes a viernes de 9:00 a 18:00 horas (PET).</li>
          <li>Los incidentes críticos reciben atención prioritaria dentro del horario de soporte.</li>
          <li>Los mantenimientos programados se comunicarán con al menos 48 horas de anticipación cuando sea posible.</li>
          <li>Las solicitudes de soporte se atienden por correo, WhatsApp y el centro de ayuda.</li>
          <li>Los acuerdos de nivel de servicio especiales se detallan en la propuesta comercial.</li>
        </ul>
      </LegalSection>

      <LegalSection id="propiedad-intelectual" number="10" title="Propiedad intelectual" icon="fas fa-copyright">
        <p>
          La Plataforma, su código, diseño, marca, documentación, bases de datos propias y demás
          elementos son propiedad de LogIA o de sus licenciantes y están protegidos por la legislación
          de propiedad intelectual.
        </p>
        <ul>
          <li>Se otorga al Cliente una licencia limitada, no exclusiva, no transferible y revocable para usar el Servicio durante la Suscripción.</li>
          <li>El Cliente conserva la titularidad de sus Datos y Contenido.</li>
          <li>El Cliente autoriza a LogIA a usar sus datos únicamente para prestar, mantener y mejorar el Servicio, conforme a la Política de Privacidad.</li>
          <li>El Cliente puede enviar sugerencias o comentarios, que podrán ser usados para mejorar la Plataforma sin obligación de compensación.</li>
          <li>No se permite copiar, modificar, distribuir ni crear obras derivadas del software sin autorización escrita.</li>
        </ul>
      </LegalSection>

      <LegalSection id="datos-personales" number="11" title="Datos personales y confidencialidad" icon="fas fa-lock">
        <p>
          LogIA trata los datos personales conforme a la Ley N.º 29733, Ley de Protección de Datos
          Personales, su reglamento y demás normativa aplicable. El detalle de finalidades, bases
          legales, plazos y derechos se encuentra en la <Link to="/privacidad">Política de Privacidad</Link>.
        </p>
        <ul>
          <li>Respecto de los datos que el Cliente carga en la Plataforma, el Cliente actúa como titular o responsable y LogIA como encargado del tratamiento.</li>
          <li>LogIA implementa medidas técnicas y organizativas razonables para proteger la información.</li>
          <li>El acceso se limita al personal autorizado y a proveedores que brindan soporte a la operación.</li>
          <li>Las obligaciones de confidencialidad subsisten durante la relación y después de su término.</li>
          <li>El Cliente debe contar con base legal y consentimientos para los datos que registre.</li>
        </ul>
      </LegalSection>

      <LegalSection id="contenido-terceros" number="12" title="Contenido del Cliente y terceros" icon="fas fa-database">
        <ul>
          <li>El Cliente es responsable de la exactitud de los datos fiscales, comerciales y operativos que registra.</li>
          <li>La emisión de comprobantes electrónicos requiere información válida y la configuración correcta ante SUNAT y el OSE/PSE.</li>
          <li>LogIA no responde por rechazos, observaciones o demoras atribuibles a datos del Cliente o a entidades externas.</li>
          <li>El Consultador utiliza información de fuentes públicas y puede presentar desfases; no constituye documentación oficial.</li>
          <li>Las funcionalidades asistidas por inteligencia artificial pueden contener errores y requieren revisión humana antes de su uso.</li>
          <li>El Cliente debe conservar sus propios respaldos de documentos críticos cuando la ley lo exija.</li>
        </ul>
      </LegalSection>

      <LegalSection id="responsabilidad" number="13" title="Limitación de responsabilidad" icon="fas fa-scale-balanced">
        <p>
          El Servicio se presta con diligencia profesional. Sin embargo, no se garantiza que sea
          ininterrumpido, oportuno o libre de errores, ni que los resultados obtenidos satisfagan
          expectativas no comprometidas por escrito.
        </p>
        <ul>
          <li>LogIA no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos.</li>
          <li>No se responde por lucro cesante, pérdida de oportunidades, pérdida de reputación o pérdida de datos derivada de causas ajenas.</li>
          <li>La responsabilidad total acumulada se limita al monto efectivamente pagado por el Cliente en los 12 meses anteriores al hecho.</li>
          <li>No se responde por interrupciones causadas por fuerza mayor, Internet del Cliente, ataques externos o servicios de terceros.</li>
          <li>Nada en estos Términos limita responsabilidades que la ley peruana declare indisponibles.</li>
        </ul>
      </LegalSection>

      <LegalSection id="indemnizacion" number="14" title="Indemnización" icon="fas fa-hand-holding-heart">
        <p>
          El Cliente mantendrá indemne a LogIA frente a reclamos, sanciones, daños y costos
          razonables (incluidos honorarios legales) que deriven de:
        </p>
        <ul>
          <li>El uso indebido del Servicio por el Cliente o sus Usuarios.</li>
          <li>La vulneración de derechos de terceros o de normativa aplicable.</li>
          <li>La inexactitud de los datos o contenidos cargados en la Plataforma.</li>
          <li>El envío de comunicaciones sin las autorizaciones requeridas.</li>
        </ul>
      </LegalSection>

      <LegalSection id="terminacion" number="15" title="Suspensión y terminación" icon="fas fa-power-off">
        <p>LogIA puede suspender o terminar el acceso por:</p>
        <ul>
          <li>Incumplimiento de estos Términos, con posibilidad de subsanación dentro de 15 días cuando sea razonable.</li>
          <li>Falta de pago después del periodo de gracia.</li>
          <li>Uso ilícito, fraudulento o que comprometa la seguridad de la Plataforma.</li>
          <li>Riesgo de insolvencia, liquidación o concurso del Cliente.</li>
          <li>Solicitud del Cliente o inactividad prolongada superior a 12 meses.</li>
        </ul>
        <p>Al terminar la relación:</p>
        <ul>
          <li>El acceso al Servicio cesa al final del periodo contratado o en la fecha de terminación.</li>
          <li>El Cliente podrá exportar sus datos dentro de los 30 días siguientes, salvo bloqueo legal.</li>
          <li>Transcurridos 90 días, los datos podrán eliminarse de forma segura.</li>
          <li>Las obligaciones de pago pendientes y las cláusulas de confidencialidad, propiedad intelectual y responsabilidad subsisten.</li>
        </ul>
      </LegalSection>

      <LegalSection id="modificaciones" number="16" title="Modificaciones" icon="fas fa-pen-to-square">
        <p>
          LogIA puede actualizar estos Términos para reflejar cambios legales, técnicos o comerciales.
          La versión vigente se publicará en esta página con su fecha de actualización.
        </p>
        <p>
          Los cambios materiales se comunicarán con al menos 30 días de anticipación por correo
          electrónico o mediante aviso en la Plataforma. Si el Cliente no está de acuerdo, podrá
          cancelar su Suscripción antes de la fecha de vigencia. El uso continuado implica aceptación.
        </p>
      </LegalSection>

      <LegalSection id="ley-aplicable" number="17" title="Ley aplicable y controversias" icon="fas fa-gavel">
        <p>
          Estos Términos se rigen por las leyes de la República del Perú. Las Partes intentarán
          resolver de buena fe cualquier controversia mediante negociación directa durante al menos
          30 días calendario.
        </p>
        <p>
          Si no se alcanza un acuerdo, las controversias se someterán a los jueces y tribunales
          competentes de Lima, sin perjuicio de los derechos que la normativa de protección al
          consumidor reconozca al Cliente cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection id="contacto" number="18" title="Contacto y notificaciones" icon="fas fa-envelope">
        <p>
          Las comunicaciones ordinarias pueden dirigirse a <a href="mailto:soporte@logia.lat">soporte@logia.lat</a>.
          Las notificaciones legales deben enviarse a la misma dirección con el asunto
          “Notificación legal — [empresa]”.
        </p>
        <ul>
          <li><strong>Correo de soporte:</strong> soporte@logia.lat</li>
          <li><strong>Privacidad y datos personales:</strong> privacidad@logia.lat</li>
          <li><strong>WhatsApp:</strong> +51 977 824 138</li>
          <li><strong>Horario:</strong> lunes a viernes, 9:00 a 18:00 (PET)</li>
          <li><strong>Domicilio:</strong> Lima, Perú</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
};

export default Terms;
