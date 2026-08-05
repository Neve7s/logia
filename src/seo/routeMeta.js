const SITE = 'https://logia.lat';

const appJsonLd = (name, url, description, featureList) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  url,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description,
  featureList,
  isPartOf: {
    '@type': 'SoftwareApplication',
    name: 'LogIA',
  },
});

export const ROUTE_META = {
  '/': {
    title:
      'LogIA — Software para Agencias de Carga | Facturación SUNAT, Cotizaciones, Tracking, Consultador de Importadores',
    description:
      'LogIA: plataforma integral para agencias de carga en Latinoamérica. Facturación electrónica SUNAT, cotizaciones de fletes, tracking de envíos, consultador de importadores, reclutamiento ATS y más. Prueba 14 días gratis.',
  },
  '/app/cotizador': {
    title: 'Cotizador de Fletes para Agencias de Carga | LogIA',
    description:
      'Crea cotizaciones profesionales de fletes marítimos, aéreos y terrestres en minutos. Cálculo automático de IGV y detracciones, PDF con branding corporativo. Prueba LogIA 14 días gratis.',
    jsonLd: appJsonLd(
      'LogIA — Cotizador de Fletes',
      `${SITE}/app/cotizador`,
      'Cotizador profesional de fletes para agencias de carga. Cotizaciones en PDF con branding corporativo, cálculo automático de IGV, detracciones y exoneraciones.',
      [
        'Cotizaciones de flete marítimo, aéreo y terrestre',
        'PDF profesionales con branding corporativo',
        'Cálculo automático de IGV y detracciones',
        'Exoneración de IGV en fletes internacionales'
      ]
    ),
  },
  '/app/shipments': {
    title: 'Tracking de Envíos y Canal Aduanero | LogIA',
    description:
      'Gestiona y rastrea envíos internacionales en tiempo real. Conoce el canal aduanero de cada despacho, evidencia documentada y flujo completo hasta la entrega. Software para agencias de carga.',
    jsonLd: appJsonLd(
      'LogIA — Tracking de Envíos',
      `${SITE}/app/shipments`,
      'Módulo de tracking de envíos con canal aduanero. Sigue el estado de cada despacho con evidencia documentada y notificaciones.',
      [
        'Tracking de envíos en tiempo real',
        'Canal aduanero por despacho',
        'Evidencia documentada de cada etapa',
        'Notificaciones de estado'
      ]
    ),
  },
  '/app/facturacion': {
    title: 'Facturación Electrónica SUNAT para Agencias de Carga | LogIA',
    description:
      'Emite facturas electrónicas SUNAT con cálculo automático de IGV y detracciones. Detecta servicios exonerados como fletes marítimos y aéreos. Software de facturación para agencias de carga.',
    jsonLd: appJsonLd(
      'LogIA — Facturación Electrónica SUNAT',
      `${SITE}/app/facturacion`,
      'Facturación electrónica SUNAT para agencias de carga. Cálculo automático de IGV, detracciones y exoneraciones de fletes internacionales.',
      [
        'Facturas electrónicas SUNAT',
        'Cálculo automático de IGV y detracciones',
        'Detección de servicios exonerados',
        'Validación automática de RUC'
      ]
    ),
  },
  '/app/maestros': {
    title: 'Gestión de Clientes, Navieras y Puertos | LogIA',
    description:
      'Centraliza clientes, navieras y puertos en un solo lugar. Base de datos maestra que alimenta cotizaciones, facturación y envíos de tu agencia de carga.',
    jsonLd: appJsonLd(
      'LogIA — Maestros',
      `${SITE}/app/maestros`,
      'Gestión de datos maestros: clientes, navieras, puertos y servicios. Una sola base de datos para toda la operación logística.',
      [
        'Gestión de clientes',
        'Catálogo de navieras y puertos',
        'Servicios configurados por operación',
        'Datos maestros compartidos entre módulos'
      ]
    ),
  },
  '/app/reclutamiento': {
    title: 'Reclutamiento ATS para Logística | LogIA',
    description:
      'Publica vacantes, recibe postulaciones y gestiona candidatos con flujo Kanban. Coordina entrevistas automáticamente. Como LinkedIn para la logística. Prueba 14 días gratis.',
  },
  '/app/comunicaciones': {
    title: 'Emails Masivos y Comunicación Empresarial | LogIA',
    description:
      'Comunícate con clientes y prospectos desde una sola plataforma. Envíos masivos de correos, campañas y comunicación empresarial integrada con tu agencia de carga.',
    jsonLd: appJsonLd(
      'LogIA — Comunicaciones',
      `${SITE}/app/comunicaciones`,
      'Comunicación empresarial: emails masivos, campañas y seguimiento de prospectos integrado a la operación logística.',
      [
        'Envío de emails masivos',
        'Campañas de comunicación',
        'Integración con clientes y prospectos',
        'Seguimiento de entregas'
      ]
    ),
  },
  '/app/consultador': {
    title: 'Consultador de Importadores SUNAT | LogIA',
    description:
      'Data lake de SUNAT con información de importadores peruanos: volumen, frecuencia, países de origen y destino. Actualización cada 7 días. Prospección comercial para agencias de carga.',
  },
  '/app/configuracion': {
    title: 'Configuración y Personalización | LogIA',
    description:
      'Personaliza LogIA para tu agencia de carga: roles, permisos, servicios, branding y preferencias de cada módulo.',
  },
  '/academy': {
    title: 'Academy LogIA — Capacitaciones y Videos Guía',
    description:
      'Capacitaciones virtuales personalizadas, videos guía de cada módulo y acuerdos presenciales para tu agencia de carga.',
  },
  '/preguntas': {
    title: 'Preguntas Frecuentes — LogIA',
    description:
      'Respuestas sobre LogIA: facturación SUNAT, IGV en fletes, detracciones, consultador de importadores, ATS, planes y precios.',
  },
  '/soporte': {
    title: 'Soporte y Ayuda — LogIA',
    description:
      'Soporte técnico y ayuda para agencias de carga que usan LogIA. Videos guía, capacitaciones y contacto directo.',
  },
  '/actualizaciones': {
    title: 'Actualizaciones y Novedades — LogIA',
    description:
      'Novedades, mejoras y nuevas funcionalidades de LogIA, la plataforma para agencias de carga en Latinoamérica.',
  },
  '/privacidad': {
    title: 'Política de Privacidad — LogIA',
    description:
      'Política de privacidad de LogIA. Conoce cómo protegemos tus datos y los de tu agencia de carga.',
  },
  '/terminos': {
    title: 'Términos y Condiciones — LogIA',
    description:
      'Términos y condiciones de uso de LogIA, plataforma para agencias de carga.',
  },
  '/cookies': {
    title: 'Política de Cookies — LogIA',
    description:
      'Política de cookies de LogIA: qué cookies usamos y cómo gestionarlas.',
  },
};

export const DEFAULT_META = ROUTE_META['/'];
