// ============================================================
// siteContent.js — Contenido estático de la Landing Page
// Edita este archivo para actualizar testimonios, métricas, etc.
// ============================================================

export const SITE_CONTENT = {

  // ─── HERO ──────────────────────────────────────────────────
  hero: {
    badge: "Prueba 14 días gratis",
    badgeSub: "Sin tarjeta de crédito",
    titleLine1: "El Motor Digital para",
    titleHighlight: "Agencias de Carga",
    subtitle: "Software facturador que calcula automáticamente IGV, detracciones y exoneraciones en fletes y servicios. Cotizaciones pro, tracking, facturación SUNAT y más. Todo en una sola plataforma.",
    ctaPrimary: { label: "Empezar Gratis", href: "https://app.logia.lat/register/company/" },
    ctaSecondary: { label: "Agendar Demo", href: "#soporte" },
    metrics: [
      { value: 80, suffix: "%", label: "Menos Carga Administrativa" },
      { value: 100, suffix: "%", label: "Trazabilidad Total" },
      { value: 24, suffix: "/7", label: "Soporte Especializado" },
    ],
  },

  // ─── SOCIAL PROOF ──────────────────────────────────────────
  socialProof: {
    tagline: "Confianza Real",
    title: "Ya hay agencias que <span class='text-highlight'>confían en LogIA</span>",
    subtitle: "Nuestro primer cliente opera sin quejas desde el día uno. Esto es lo que opina:",
    testimonials: [
      {
        quote: "LogIA transformó nuestra forma de cotizar. Lo que antes tomaba 30 minutos ahora se resuelve en 2. El equipo comercial cerró un 40% más de operaciones en el primer mes.",
        author: "Operaciones Logísticas",
        role: "Cliente desde 2026",
        avatar: "🏢",
        metric: "40% más ventas",
      },
    ],
    stats: [
      { value: "100%", label: "Satisfacción" },
      { value: "0", label: "Quejas Registradas" },
      { value: "2 min", label: "Tiempo Promedio de Cotización" },
    ],
  },

  // ─── CÓMO FUNCIONA ─────────────────────────────────────────
  howItWorks: {
    tagline: "Simple y Rápido",
    title: "Cómo funciona <span class='text-highlight'>LogIA</span>",
    subtitle: "En 3 pasos tu agencia está operando con el motor digital más completo de Latinoamérica.",
    steps: [
      {
        number: "01",
        icon: "fas fa-building",
        title: "Registra tu Empresa",
        description: "Crea tu cuenta en 2 minutos. Solo necesitas tu RUC y datos básicos. Tu entorno se configura automáticamente con datos separados y seguros.",
        duration: "2 minutos",
      },
      {
        number: "02",
        icon: "fas fa-users-gear",
        title: "Configura tu Equipo",
        description: "Invita a tus empleados, asigna roles (Admin, Comercial, Operaciones) y personaliza los datos maestros: clientes, navieras, servicios y puertos.",
        duration: "10 minutos",
      },
      {
        number: "03",
        icon: "fas fa-rocket",
        title: "Empieza a Cotizar",
        description: "Genera cotizaciones profesionales en PDF con cálculo automático de costos. Envía por email, aprueba y conviértelo en un Shipment con tracking en tiempo real.",
        duration: "Inmediato",
      },
    ],
  },

  // ─── GALERÍA DE APLICACIONES ────────────────────────────────
  appGallery: {
    tagline: "Ecosistema Completo",
    title: "Herramientas que <span class='text-highlight'>resuelven problemas reales</span>",
    subtitle: "Cada módulo está diseñado para eliminar cuellos de botella específicos de las agencias de carga.",
    apps: [
      {
        id: "cotizador",
        icon: "fa-calculator",
        title: "Cotizador Profesional",
        route: "/app/cotizador",
        tagline: "Cotiza en minutos, no en horas",
        problem: "Las agencias pierden 30-45 minutos por cotización usando Excel o Word. Los errores de cálculo cuestan dinero. No sabes si el servicio tiene IGV, detracción o exoneración.",
        solution: "Cálculo automático por tarifa, peso, volumen o contenedor. Detecta automáticamente si el flete está exento de IGV (marítimo/aéreo internacional) o si aplica IGV y detracciones en servicios de destino/origen. PDF profesional con tu marca.",
        timeSaved: "De 30 min a 2 min por cotización",
        image: "cotizador.webp",
        features: [
          "Detección automática de exoneración IGV en fletes internacionales",
          "Cálculo de IGV y detracciones según tipo de servicio",
          "PDF profesional con branding corporativo",
          "Historial completo con estados (Aprobado/Rechazado)",
          "Duplicar cotizaciones en un clic",
        ],
      },
      {
        id: "shipments",
        icon: "fa-box-open",
        title: "Shipments Control",
        route: "/app/shipments",
        tagline: "Tracking real de cada carga",
        problem: "Sin control visual, las cargas se pierden entre WhatsApp, Excel y llamadas. El cliente pregunta y no tienes respuesta.",
        solution: "Dashboard visual con canal de aduana (Verde/Rojo/Naranja). Actualización instantánea sin recargar. Aviso de Llegada automático.",
        timeSaved: "De 15 min de búsqueda a 10 segundos",
        image: "shipment.webp",
        features: [
          "Control visual del canal aduanero",
          "Actualización instantánea (sin recargar)",
          "Aviso de Llegada en PDF automático",
          "Historial completo de cada shipment",
        ],
      },
      {
        id: "facturacion",
        icon: "fa-file-invoice",
        title: "Facturación SUNAT",
        route: "/app/facturacion",
        tagline: "Cumplimiento fiscal automático",
        problem: "La facturación manual con SUNAT es lenta, propensa a errores y genera multas. Calcular IGV, detracciones y exoneraciones manualmente toma tiempo y cause errores costosos.",
        solution: "Conexión directa OSE/PSE. Calcula automáticamente IGV, detracciones y exoneraciones. Fletes marítimos y aéreos internacionales exonerados de IGV. Servicios en destino u origen con IGV según tipo de operación. Facturas, boletas y notas de crédito electrónicas aprobadas al instante.",
        timeSaved: "De 20 min a 30 segundos por comprobante",
        image: "fiannza1.webp",
        features: [
          "Cálculo automático de IGV según tipo de servicio",
          "Detección de exoneración IGV en fletes internacionales",
          "Cálculo automático de detracciones SUNAT",
          "Aprobación automática por OSE/PSE",
          "Exportación de reportes a Excel",
        ],
      },
      {
        id: "maestros",
        icon: "fa-database",
        title: "Data Masters",
        route: "/app/maestros",
        tagline: "Datos centralizados",
        problem: "Los datos de clientes, navieras y puertos están dispersos en archivos, contactos de WhatsApp y hojas de cálculo.",
        solution: "Base de datos unificada con autocompleta por RUC. Catálogo de navieras, puertos y servicios. Cada vendedor ve solo sus clientes.",
        timeSaved: "De 5 min de búsqueda a 3 segundos",
        image: "maestros.webp",
        features: [
          "Autocompleta por RUC o razón social",
          "Catálogo de navieras y puertos",
          "Aislamiento de datos por vendedor",
          "Consulta SUNAT integrada",
        ],
      },
      {
        id: "reclutamiento",
        icon: "fa-user-tie",
        title: "Reclutamiento ATS",
        route: "/app/reclutamiento",
        tagline: "El LinkedIn de la Logística",
        problem: "Reclutar personal cualificado para la agencia es manual, lento y desorganizado. Los candidatos se pierden entre correos. No hay un lugar central para buscar empleo en logística.",
        solution: "Como LinkedIn pero enfocado en logística. Publica vacantes, recibe postulaciones organizadas y gestiona candidatos con flujo visual Kanban. Los candidatos encuentran empleo en agencias de carga, aduanas y operaciones internacionales.",
        timeSaved: "De 2 semanas a 3 días por contratación",
        image: "ats.jpg",
        features: [
          "Publicación de vacantes para agencias de carga",
          "Flujo visual Kanban de candidatos",
          "Búsqueda de empleo en logística y aduanas",
          "Conversión directa a empleado activo",
        ],
      },
      {
        id: "consultador",
        icon: "fa-binoculars",
        title: "Consultador",
        route: "/app/consultador",
        tagline: "Data lake de SUNAT — Importadores del Perú",
        problem: "No sabes quién importa, cuánto importa ni con qué frecuencia. La información de SUNAT está dispersa y es difícil de consultar.",
        solution: "Data lake de importadores peruanos actualizado cada 7 días. Resumen por empresa, volumen, frecuencia, origen y destino.",
        timeSaved: "De horas buscando a segundos consultando",
        image: "consultee.webp",
        features: [
          "Resumen completo por empresa importadora",
          "Volumen y frecuencia de importación",
          "Países de origen y puertos de destino",
          "Declaraciones aduaneras actualizadas",
        ],
      },
      {
        id: "configuracion",
        icon: "fa-chart-line",
        title: "Métricas & Config",
        route: "/app/configuracion",
        tagline: "Control total de tu agencia",
        problem: "Sin métricas claras, la gerencia toma decisiones a ciegas. No sabes qué vende más, qué empleado rinde mejor.",
        solution: "Dashboard ejecutivo con KPIs en tiempo real. Personalización de documentos. Gestión de usuarios y permisos granulares.",
        timeSaved: "Decisiones basadas en datos, no en intuición",
        image: "kpi.webp",
        features: [
          "KPIs de ventas y productividad",
          "Personalización de firmas y logotipos",
          "Gestión de usuarios y permisos",
          "Tus datos siempre protegidos y separados",
        ],
      },
      {
        id: "comunicaciones",
        icon: "fa-paper-plane",
        title: "Comunicaciones",
        route: "/app/comunicaciones",
        tagline: "Correos corporativos que impactan",
        problem: "Envías correos genéricos sin personalizar. Se te pasa saludar en fechas clave. Escribes cada correo uno por uno.",
        solution: "Templates profesionales con tu marca. Envía correos de prospección que abren puertas y emails masivos para eventos y saludos.",
        timeSaved: "De 10 min a envío automático",
        image: "commu.jpg",
        features: [
          "Correos de prospección personalizados",
          "Emails masivos para eventos (Día del Padre, Madre, Trabajador)",
          "Templates con logo y colores de tu marca",
          "Segmentación por cliente, zona o servicio",
        ],
      },
    ],
    pdfEngine: {
      icon: "fa-file-pdf",
      title: "Motor de Documentación PDF",
      description: "Generación automática de documentos de alta calidad: Cotizaciones, Avisos de Llegada, Facturación SUNAT y Recibos de Caja con branding corporativo integrado.",
      image: "pdf-docs.jpg",
    },
  },

  // ─── PRICING ───────────────────────────────────────────────
  pricing: {
    tagline: "Planes de Suscripción",
    title: "Escala tu agencia al <span class='text-highlight'>siguiente nivel</span>",
    plans: [
      {
        name: "Básico",
        basePrice: 79.99,
        description: "Ideal para agencias que empiezan a digitalizar sus operaciones. Cotizador profesional y control básico de tu equipo.",
        features: [
          "Dashboard profesional con métricas clave",
          "Cotizaciones en PDF con tu marca (3 formatos)",
          "Control de rendimiento de tu personal",
          "Catálogo de clientes, navieras y servicios",
          "1 Administrador + 2 Empleados",
          "Soporte por correo electrónico",
        ],
        cta: "Elegir Básico",
        ctaLink: "https://app.logia.lat/register/company/",
        featured: false,
        color: "#6366f1",
        icon: "fas fa-rocket",
      },
      {
        name: "Estándar",
        basePrice: 149.99,
        description: "Para agencias que necesitan control total de operaciones. Shipments, tracking y más usuarios para tu equipo.",
        features: [
          "Todo en Básico",
          "Seguimiento de cargas con canal aduanero",
          "Avisos de Llegada automáticos en PDF",
          "Dominio personalizado para tu empresa",
          "2 Administradores + 5 Empleados",
          "Soporte prioritario por WhatsApp",
        ],
        cta: "Elegir Estándar",
        ctaLink: "https://app.logia.lat/register/company/",
        featured: true,
        badge: "Más Equilibrado",
        color: "#0ea5e9",
        icon: "fas fa-briefcase",
      },
      {
        name: "Premium",
        basePrice: 449.99,
        description: "Potencia total con Facturación Electrónica SUNAT y automatización completa para agencias establecidas.",
        features: [
          "Todo en Estándar",
          "Facturación Electrónica SUNAT (OSE/PSE)",
          "Cálculo automático de IGV y detracciones",
          "Recibos personalizados con diseño propio",
          "Control total de productividad y KPIs",
          "Usuarios ilimitados para tu equipo",
          "Soporte prioritario 24/7",
        ],
        cta: "Contactar Ventas",
        ctaLink: "#soporte",
        featured: false,
        color: "#f59e0b",
        icon: "fas fa-crown",
      },
      {
        name: "Personalizado",
        basePrice: null,
        description: "¿Necesitas algo específico? Diseñamos un plan a la medida con los módulos y usuarios que tu agencia requiera.",
        features: [
          "Todos los módulos Premium disponibles",
          "Configuración a medida de tu operación",
          "Usuarios y módulos según tu necesidad",
          "Integraciones especiales bajo demanda",
          "Soporte dedicado con Account Manager",
          "SLA personalizado garantizado",
        ],
        cta: "Contactar Ventas",
        ctaLink: "#soporte",
        featured: false,
        color: "#8b5cf6",
        icon: "fas fa-gear",
      },
    ],
  },

  // ─── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      q: "¿Necesito instalar algo en mi computadora?",
      a: "No, LogIA es una plataforma 100% web. Solo necesitas un navegador moderno (Chrome, Firefox, Safari o Edge) y conexión a internet.",
      icon: "fas fa-globe",
    },
    {
      q: "¿Puedo cancelar mi suscripción en cualquier momento?",
      a: "Sí, puedes cancelar en cualquier momento desde tu panel. No hay permanencia mínima ni penalizaciones.",
      icon: "fas fa-xmark",
    },
    {
      q: "¿Ofrecen soporte en español para Latinoamérica?",
      a: "Sí, todo nuestro soporte está disponible en español, con horarios adaptados al huso horario de Latinoamérica (GMT-5).",
      icon: "fas fa-language",
    },
    {
      q: "¿Manejan facturación electrónica con SUNAT?",
      a: "Sí, nuestro plan Premium incluye integración completa con SUNAT para facturas, boletas y notas de crédito electrónicas.",
      icon: "fas fa-file-invoice",
    },
    {
      q: "¿Hay un período de prueba gratuita?",
      a: "Sí, ofrecemos 14 días de prueba gratuita sin tarjeta de crédito. Tienes acceso completo a todas las funcionalidades del plan Estándar.",
      icon: "fas fa-gift",
    },
    {
      q: "¿Mis datos están seguros?",
      a: "Absolutamente. Encriptación AES-256, cumplimiento SOC 2 Tipo II, y cada agencia tiene su propio entorno seguro con datos completamente separados. Tus datos nunca se mezclan con los de otras empresas.",
      icon: "fas fa-shield-halved",
    },
    {
      q: "¿Puedo migrar mis datos de otro sistema?",
      a: "Sí, nuestro equipo te ayuda a migrar clientes, proveedores y operaciones desde tu sistema actual con soporte personalizado.",
      icon: "fas fa-arrows-turn-to-dots",
    },
  ],

  // ─── UPDATES / CHANGELOG ───────────────────────────────────
  updates: [
    {
      date: "Noviembre 2026",
      title: "Integración Tracking API",
      tags: ["Operaciones", "API"],
      description: "Conectamos con las APIs de las principales navieras para obtener datos de tracking en tiempo real.",
    },
    {
      date: "Octubre 2026",
      title: "Facturación OSE/PSE v2.0",
      tags: ["Finanzas", "SUNAT"],
      description: "Conexión directa con nuevos operadores OSE y cálculo automático avanzado de IGV.",
    },
  ],

  // ─── NAVBAR ────────────────────────────────────────────────
  navbar: {
    solutions: [
      { icon: "fa-calculator", label: "Cotizador Profesional", path: "/app/cotizador" },
      { icon: "fa-box-open", label: "Shipments Control", path: "/app/shipments" },
      { icon: "fa-file-invoice", label: "App Facturación", path: "/app/facturacion" },
      { icon: "fa-database", label: "Maestros", path: "/app/maestros" },
      { icon: "fa-user-tie", label: "Reclutamiento ATS", path: "/app/reclutamiento" },
      { icon: "fa-paper-plane", label: "Comunicaciones", path: "/app/comunicaciones" },
      { icon: "fa-binoculars", label: "Consultador", path: "/app/consultador" },
    ],
    support: [
      { icon: "fas fa-headset", label: "Soporte Técnico", path: "/soporte" },
      { icon: "fas fa-circle-question", label: "Preguntas Frecuentes", path: "/preguntas" },
      { icon: "fas fa-graduation-cap", label: "Academy", path: "/academy" },
      { icon: "fas fa-envelope", label: "Contacto", path: "/soporte" },
    ],
    cta: {
      login: { label: "Ingresar", href: "https://app.logia.lat/login/" },
      trial: { label: "Prueba Gratis", href: "https://app.logia.lat/register/company/" },
    },
  },

  // ─── FOOTER ────────────────────────────────────────────────
  footer: {
    bio: "Plataforma integral para agencias de carga en Latinoamérica. Automatiza cotizaciones, operaciones y facturación electrónica con seguridad de grado empresarial. Tus datos están protegidos y separados.",
    social: [
      // { icon: "fab fa-x-twitter", href: "https://twitter.com/logia_lat", label: "Twitter" },
      // { icon: "fab fa-linkedin-in", href: "https://linkedin.com/company/logia", label: "LinkedIn" },
      // { icon: "fab fa-youtube", href: "https://youtube.com/@logia", label: "YouTube" },
      // { icon: "fab fa-instagram", href: "https://instagram.com/logia.lat", label: "Instagram" },
      { icon: "fab fa-whatsapp", href: "https://wa.me/51977824138", label: "WhatsApp" },
      { icon: "fab fa-facebook-f", href: "https://www.facebook.com/profile.php?id=61590305771959", label: "Facebook" },
      { icon: "fab fa-tiktok", href: "https://tiktok.com/@logia.lat", label: "TikTok" },
      { icon: "fas fa-briefcase", href: "https://app.logia.lat/recruitment/empleos/", label: "Busca Empleo en Logística" },
    ],
    solutions: [
      { icon: "fas fa-cubes", label: "Ecosistema", path: "/#app-gallery" },
      { icon: "fas fa-calculator", label: "Cotizador Profesional", path: "/app/cotizador" },
      { icon: "fas fa-box-open", label: "Shipments", path: "/app/shipments" },
      { icon: "fas fa-file-invoice", label: "App Facturación", path: "/app/facturacion" },
      { icon: "fas fa-user-tie", label: "Reclutamiento ATS", path: "/app/reclutamiento" },
      { icon: "fas fa-paper-plane", label: "Comunicaciones", path: "/app/comunicaciones" },
      { icon: "fas fa-binoculars", label: "Consultador", path: "/app/consultador" },
    ],
    resources: [
      { icon: "fas fa-graduation-cap", label: "Academy", path: "/academy" },
      { icon: "fas fa-microchip", label: "Infraestructura", path: "/#tecnologia" },
      { icon: "fas fa-tags", label: "Planes y Precios", path: "/#precios" },
      { icon: "fas fa-headset", label: "Soporte Técnico", path: "/soporte" },
      { icon: "fas fa-circle-question", label: "Preguntas Frecuentes", path: "/preguntas" },
      { icon: "fas fa-briefcase", label: "¿Buscas empleo?", path: "https://app.logia.lat/recruitment/empleos/", external: true },
    ],
    legal: [
      { icon: "fas fa-shield-halved", label: "Política de Privacidad", path: "/privacidad" },
      { icon: "fas fa-file-contract", label: "Términos y Condiciones", path: "/terminos" },
      { icon: "fas fa-clock-rotate-left", label: "Changelog", path: "/actualizaciones" },
    ],
    contact: {
      email: "soporte@logia.lat",
      whatsapp: "+51 977 824 138",
      whatsappLink: "https://wa.me/51977824138",
      hours: "Lun - Vie: 9:00 AM - 6:00 PM (PET)",
    },
    version: "v2.4.0",
  },
};
