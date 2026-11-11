import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage, { LegalSection } from '../components/layout/LegalPage';

const sections = [
  { id: 'que-son', title: '¿Qué son las cookies?' },
  { id: 'categorias', title: 'Categorías que utilizamos' },
  { id: 'detalle', title: 'Detalle de cookies' },
  { id: 'terceros', title: 'Servicios de terceros' },
  { id: 'gestion', title: 'Cómo gestionarlas' },
  { id: 'duracion', title: 'Duración' },
  { id: 'consentimiento', title: 'Consentimiento' },
  { id: 'cambios', title: 'Cambios en esta política' },
  { id: 'contacto', title: 'Contacto' },
];

const Cookies = () => {
  return (
    <LegalPage
      title="Política de Cookies"
      shortTitle="Cookies"
      tagline="Transparencia en el uso de cookies"
      updated="10 de noviembre de 2026"
      version="2.0"
      sections={sections}
      intro="En LogIA utilizamos cookies y tecnologías similares para que la plataforma funcione de forma segura, recordar tus preferencias y entender cómo se usa el sitio. Esta política explica qué usamos y cómo puedes gestionarlo."
    >
      <LegalSection id="que-son" number="01" title="¿Qué son las cookies?" icon="fas fa-cookie-bite">
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
          visitas un sitio web. Permiten recordar información entre páginas y visitas, mantener la
          sesión, aplicar medidas de seguridad y medir el uso del sitio.
        </p>
        <p>
          También usamos tecnologías similares, como almacenamiento local del navegador, para
          conservar preferencias de interfaz y mejorar el rendimiento.
        </p>
      </LegalSection>

      <LegalSection id="categorias" number="02" title="Categorías que utilizamos" icon="fas fa-list">
        <ul>
          <li>
            <strong>Estrictamente necesarias:</strong> permiten la navegación, la autenticación y la
            seguridad. Sin ellas, el Servicio no puede funcionar correctamente.
          </li>
          <li>
            <strong>De preferencias:</strong> recuerdan configuraciones como idioma, tema o filtros
            seleccionados.
          </li>
          <li>
            <strong>De rendimiento:</strong> recopilan información agregada sobre el uso del sitio
            para detectar errores y optimizar la experiencia.
          </li>
          <li>
            <strong>De marketing:</strong> solo se utilizan si existe consentimiento previo y se
            informa de su finalidad. No usamos cookies publicitarias de perfilado sin autorización.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="detalle" number="03" title="Detalle de cookies" icon="fas fa-table-list">
        <div className="legal-table-wrapper">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Categoría</th>
                <th scope="col">Finalidad</th>
                <th scope="col">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Necesaria</td>
                <td>Mantener la sesión autenticada</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>csrf_token</td>
                <td>Necesaria</td>
                <td>Proteger formularios contra ataques CSRF</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>preferences</td>
                <td>Preferencias</td>
                <td>Recordar idioma, tema y filtros</td>
                <td>Hasta 12 meses</td>
              </tr>
              <tr>
                <td>analytics_id</td>
                <td>Rendimiento</td>
                <td>Medición agregada del uso del sitio</td>
                <td>Hasta 24 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Los nombres son referenciales y pueden variar según el entorno, la versión del producto o
          el proveedor de infraestructura. La plataforma puede actualizar este detalle sin alterar
          las finalidades descritas.
        </p>
      </LegalSection>

      <LegalSection id="terceros" number="04" title="Servicios de terceros" icon="fas fa-puzzle-piece">
        <p>
          Algunos recursos son servidos por terceros y pueden registrar datos técnicos como la
          dirección IP o el navegador:
        </p>
        <ul>
          <li>
            <strong>Google Fonts:</strong> carga de tipografías. Consulta la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              política de privacidad de Google
            </a>.
          </li>
          <li>
            <strong>Font Awesome CDN:</strong> entrega de iconografía utilizada en la interfaz.
          </li>
          <li>
            <strong>Pasarela de pagos y correo transaccional:</strong> se usan solo cuando contratas
            un plan o cuando la plataforma envía notificaciones operativas.
          </li>
        </ul>
        <p>
          No controlamos directamente las cookies de terceros. Te recomendamos revisar sus políticas
          para conocer su alcance.
        </p>
      </LegalSection>

      <LegalSection id="gestion" number="05" title="Cómo gestionarlas" icon="fas fa-sliders">
        <p>
          Puedes bloquear, eliminar o limitar las cookies desde la configuración de tu navegador.
          Consulta la ayuda oficial de cada navegador:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p>
          Si deshabilitas las cookies necesarias, es posible que no puedas iniciar sesión o que
          algunas funciones de la plataforma dejen de estar disponibles.
        </p>
      </LegalSection>

      <LegalSection id="duracion" number="06" title="Duración" icon="fas fa-clock">
        <ul>
          <li><strong>Cookies de sesión:</strong> se eliminan al cerrar el navegador.</li>
          <li><strong>Cookies persistentes:</strong> permanecen durante el plazo indicado o hasta que las elimines manualmente.</li>
          <li><strong>Almacenamiento local:</strong> puede conservarse hasta que se borren los datos del sitio.</li>
        </ul>
      </LegalSection>

      <LegalSection id="consentimiento" number="07" title="Consentimiento" icon="fas fa-handshake">
        <p>
          Las cookies estrictamente necesarias no requieren consentimiento porque son indispensables
          para prestar el Servicio. Las cookies de preferencias, rendimiento y marketing se utilizan
          conforme a la normativa aplicable y, cuando corresponde, con tu autorización.
        </p>
        <p>
          Puedes retirar tu consentimiento en cualquier momento eliminando las cookies y ajustando
          la configuración de tu navegador.
        </p>
      </LegalSection>

      <LegalSection id="cambios" number="08" title="Cambios en esta política" icon="fas fa-rotate">
        <p>
          Podemos actualizar esta política cuando cambien las cookies utilizadas o la normativa
          aplicable. Publicaremos la versión vigente con su fecha de actualización y comunicaremos
          los cambios relevantes por los canales habituales.
        </p>
      </LegalSection>

      <LegalSection id="contacto" number="09" title="Contacto" icon="fas fa-envelope">
        <p>
          Si tienes preguntas sobre esta política, escríbenos a{' '}
          <a href="mailto:privacidad@logia.lat">privacidad@logia.lat</a> o a{' '}
          <a href="mailto:soporte@logia.lat">soporte@logia.lat</a>.
        </p>
        <p>
          También puedes revisar la <Link to="/privacidad">Política de Privacidad</Link> y los{' '}
          <Link to="/terminos">Términos y Condiciones</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
};

export default Cookies;
