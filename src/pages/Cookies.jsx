import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Cookies = () => {
  return (
    <PageLayout 
      title="Política de Cookies"
      tagline="Transparencia en el uso de cookies"
    >
      <div className="content-section">
        <p className="content-lead">
          En LogIA utilizamos cookies y tecnologías similares para mejorar tu experiencia 
          en nuestra plataforma. Esta política explica qué cookies usamos, para qué las 
          utilizamos y cómo puedes gestionarlas.
        </p>

        <div className="content-card">
          <h2><i className="fas fa-cookie-bite"></i> 1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
          (computadora, tablet o móvil) cuando visitas un sitio web. Sirven para recordar 
          tus preferencias, mejorar la experiencia de navegación y obtener información 
          sobre cómo se utiliza el sitio.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-list"></i> 2. Tipos de cookies que utilizamos</h2>
          <p>En LogIA clasificamos las cookies en las siguientes categorías:</p>
          <ul>
            <li>
              <strong>Cookies estrictamente necesarias:</strong> Son esenciales para el 
              funcionamiento de la plataforma. Sin estas cookies, el servicio no podría 
              proporcionarse correctamente. Ejemplo: cookies de sesión, autenticación y 
              seguridad.
            </li>
            <li>
              <strong>Cookies de rendimiento:</strong> Recopilan información sobre cómo 
              utilizan los visitantes la plataforma (páginas visitadas, tiempo de permanencia, 
              errores encontrados). Esta información es agregada y anónima, y se utiliza 
              exclusivamente para mejorar el funcionamiento del sitio.
            </li>
            <li>
              <strong>Cookies de funcionalidad:</strong> Permiten recordar tus preferencias 
              y configuraciones (idioma, región, tema de visualización) para ofrecerte una 
              experiencia más personalizada.
            </li>
            <li>
              <strong>Cookies de marketing:</strong> Se utilizan para rastrear a los 
              visitantes en los sitios web con el fin de mostrar anuncios relevantes y 
              atractivos para el usuario individual. Estas cookies son de terceros 
              (Google Analytics, Meta Pixel).
            </li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-bullseye"></i> 3. Para qué utilizamos las cookies</h2>
          <p>Utilizamos cookies para los siguientes fines:</p>
          <ul>
            <li><strong>Autenticación:</strong> Mantener tu sesión activa y segura mientras 
            utilizas la plataforma</li>
            <li><strong>Seguridad:</strong> Detectar y prevenir accesos no autorizados 
            y proteger contra fraudes</li>
            <li><strong>Preferencias:</strong> Recordar tu configuración, idioma y 
            opciones de visualización</li>
            <li><strong>Análisis:</strong> Comprender cómo los usuarios interactúan con 
            la plataforma para mejorarla continuamente</li>
            <li><strong>Rendimiento:</strong> Optimizar la velocidad de carga y el 
            funcionamiento de la aplicación</li>
            <li><strong>Soporte:</strong> Proporcionar asistencia técnica más eficiente</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-puzzle-piece"></i> 4. Cookies de terceros</h2>
          <p>Algunas cookies son instaladas por servicios de terceros que aparecen en 
          nuestras páginas:</p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Nos ayuda a entender cómo los visitantes 
              utilizan la plataforma. Esta información es agregada y anónima. 
              Más información: 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> 
                Política de Privacidad de Google
              </a>
            </li>
            <li>
              <strong>Google Fonts:</strong> Utilizamos fuentes de Google para mejorar 
              la tipografía del sitio.
            </li>
          </ul>
          <p>No tenemos control sobre las cookies de terceros. Te recomendamos revisar 
          las políticas de privacidad de estos servicios para más información.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-sliders"></i> 5. Gestión de cookies</h2>
          <p>Puedes controlar y gestionar las cookies de diversas maneras:</p>
          <ul>
            <li>
              <strong>Configuración del navegador:</strong> La mayoría de los navegadores 
              permiten bloquear o eliminar cookies. Consulta la ayuda de tu navegador 
              para conocer los pasos:
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
              </ul>
            </li>
            <li>
              <strong>Panel de preferencias:</strong> En el futuro, ofreceremos un panel 
              de configuración de cookies dentro de la plataforma para que puedas 
              personalizar tus preferencias.
            </li>
          </ul>
          <p><strong>Importante:</strong> Si deshabilitas las cookies, algunas 
          funcionalidades de la plataforma podrían no estar disponibles o no 
          funcionar correctamente.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-shield-halved"></i> 6. Cookies esenciales</h2>
          <p>Las cookies estrictamente necesarias no se pueden desactivar ya que son 
          fundamentales para el funcionamiento de la plataforma. Incluyen:</p>
          <ul>
            <li>Cookies de sesión de usuario</li>
            <li>Cookies de autenticación y seguridad</li>
            <li>Cookies de平衡 de carga (load balancing)</li>
            <li>Cookies de recordar el consentimiento de cookies</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-clock"></i> 7. Duración de las cookies</h2>
          <p>Las cookies que utilizamos tienen las siguientes duraciones:</p>
          <ul>
            <li><strong>Cookies de sesión:</strong> Se eliminan automáticamente al cerrar 
            el navegador</li>
            <li><strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante 
            un período determinado o hasta que las elimines manualmente</li>
          </ul>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-globe"></i> 8. Cookies en otros países</h2>
          <p>Si accedes a LogIA desde fuera de Perú, ten en cuenta que tu información 
          puede ser transferida a, almacenada y procesada en Perú donde se encuentran 
          nuestros servidores. Al utilizar nuestra plataforma, consientes dicha 
          transferencia.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-sync-alt"></i> 9. Cambios en esta política</h2>
          <p>Nos reservamos el derecho de actualizar esta política de cookies en cualquier 
          momento. Los cambios importantes serán notificados a través de la plataforma 
          o por correo electrónico. Te recomendamos revisar esta página periódicamente.</p>
        </div>

        <div className="content-card">
          <h2><i className="fas fa-envelope"></i> 10. Contacto</h2>
          <p>Si tienes preguntas sobre esta política de cookies o sobre el uso de cookies 
          en nuestra plataforma, contáctanos:</p>
          <ul>
            <li><strong>Correo:</strong> privacidad@logia.lat</li>
            <li><strong>WhatsApp:</strong> +51 977 824 138</li>
          </ul>
        </div>

        <p className="content-update">
          <i className="fas fa-calendar"></i> Última actualización: Agosto 2025
        </p>
      </div>
    </PageLayout>
  );
};

export default Cookies;
