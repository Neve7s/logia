import cotizadorImg from '../assets/ecosistema/cotizador.webp';
import shipmentImg from '../assets/ecosistema/shipment.webp';
import fiannza1Img from '../assets/ecosistema/fiannza1.webp';
import maestrosImg from '../assets/ecosistema/maestros.webp';
import kpiImg from '../assets/ecosistema/kpi.webp';
import configuracionImg from '../assets/ecosistema/configuracion.webp';

export const APPLICATIONS = [
  {
    id: 'cotizador',
    icon: 'fa-calculator',
    title: 'Cotizador Versátil',
    description: 'Tu herramienta principal de ventas. Cotiza en 2 minutos: flete, gastos, seguro, IGV y detracciones se calculan solos. Genera el PDF con la marca de tu agencia (colores, logo y estilo) y conviértelo en embarque y factura sin re-tipear nada.',
    features: [
      'Cálculo automático de IGV y detracciones según tipo de servicio.',
      'PDF profesional con tu marca: colores, logo y estilo (Moderno, Corporativo, Minimalista).',
      'Historial completo con estados (Borrador, Enviada, Aprobada, Rechazada, Caducada).',
      'Crea el cliente, la naviera o el puerto al vuelo, sin salir de la pantalla.',
      'Duplica cotizaciones en un clic y obtén un nuevo código al instante.'
    ],
    image: cotizadorImg,
    tag: 'Apps: Cotizador Pro'
  },
  {
    id: 'shipments',
    icon: 'fa-box-open',
    title: 'Shipments Control',
    description: 'Seguimiento visual de tus cargas aprobadas. Panel tipo kanban con el estado de cada embarque, canal aduanero por colores y enlace de tracking según la naviera. El sistema genera el Aviso de Llegada en PDF automáticamente y te avisa de las cargas que llegarán en los próximos 15 días.',
    features: [
      'Control visual del canal de aduana (Verde, Amarillo, Rojo).',
      'Enlace de seguimiento automático según la naviera (Maersk, Hapag-Lloyd y más).',
      'Aviso de Llegada en PDF con tu logo, listo para el cliente.',
      'Actualización instantánea sin recargar la página.',
      'Alertas de demoras y fechas clave (zarpe, llegada, levante).'
    ],
    image: shipmentImg,
    tag: 'Apps: Gestión de Carga'
  },
  {
    id: 'facturacion',
    icon: 'fa-file-invoice',
    title: 'Facturación OSE/PSE',
    description: 'Emite facturas, boletas y notas de crédito electrónicas validadas ante SUNAT. Cálculo automático de IGV y detracciones (códigos 027 y 037), modo PRUEBAS antes de PRODUCCIÓN, y envío automático del comprobante al cliente con tu marca.',
    features: [
      'Comprobantes aprobados automáticamente por SUNAT (OSE/PSE).',
      'Cálculo automático de IGV (18%) y detracciones (4%–30%) sin errores.',
      'Envío automático de la factura por correo con tu logo.',
      'Reportes financieros: emitidos, cobrados, vencidos y por vendedor.',
      'Exporta reportes a Excel con un clic.'
    ],
    image: fiannza1Img,
    tag: 'Apps: Finanzas LogIA'
  },
  {
    id: 'maestros',
    icon: 'fa-database',
    title: 'Infraestructura Masters',
    description: 'La única fuente de verdad de tu agencia: clientes, servicios, navieras, puertos, agentes de aduana y tipos de carga en un solo lugar. RUC validado matemáticamente y autocompletado desde SUNAT, anti-duplicados con aviso de quién registró cada cliente, y tracking de navieras con detección automática de Maersk y Hapag-Lloyd.',
    features: [
      'Validación oficial del RUC peruano (11 dígitos, dígito verificador).',
      'Autocompleta razón social y dirección desde SUNAT/RENIEC.',
      'Anti-duplicados: te dice quién registró un RUC que ya existe.',
      'Navieras con plantilla de tracking y días de sobreestadía.',
      'Cada vendedor solo ve sus propios clientes para mayor privacidad.'
    ],
    image: maestrosImg,
    tag: 'Maestros del Sistema'
  },
  {
    id: 'ats',
    icon: 'fa-user-tie',
    title: 'Reclutamiento (ATS)',
    description: 'Sistema de reclutamiento con portal de empleo público con la marca de tu agencia. Publica convocatorias, recibe postulaciones con CV en la nube y gestiona a cada candidato con un flujo visual: recibido, preseleccionado, entrevista, oferta y contratado.',
    features: [
      'Portal de empleo público: tuagencia.logia.lat/empleos/ con tu marca.',
      'Flujo visual tipo kanban del candidato (postulado → entrevistado → aceptado).',
      'Convierte un postulante en empleado activo con un clic.',
      'Invitaciones a entrevista y confirmaciones por correo con tu logo.',
      'Configura descuento de tardanzas y pago de horas extras desde RRHH.'
    ],
    image: kpiImg,
    tag: 'Apps: RRHH ATS'
  },
  {
    id: 'configuracion',
    icon: 'fa-chart-line',
    title: 'Métricas & Configuraciones',
    description: 'El panel del administrador te da la agencia completa: ventas, contenedores en tránsito, cobros pendientes, quién está conectado y qué está haciendo, y rendimiento por vendedor. Además personalizas la imagen de tu empresa: enlace propio, logo, slogan, colores de PDF y avisos para todo el equipo.',
    features: [
      'Panel del equipo: quién está conectado y qué está haciendo en tiempo real.',
      'KPIs de ventas, tránsitos y cobros, filtrables por vendedor.',
      'Noticias de la empresa: publica avisos que ven todos los empleados.',
      'Personaliza logo, colores, estilo de PDF y marcas de agua de certificaciones.',
      'Los datos de cada agencia están completamente separados y protegidos.'
    ],
    image: configuracionImg,
    tag: 'Apps: Configuración & KPI'
  }
];

export const UPDATES = [
  {
    date: 'Noviembre 2026',
    title: 'Integración Tracking API',
    tags: ['Operaciones', 'API'],
    description: 'Conectamos con las APIs de las principales navieras para obtener datos de tracking en tiempo real sin necesidad de ingresar manualmente la información.'
  },
  {
    date: 'Octubre 2026',
    title: 'Facturación OSE/PSE v2.0',
    tags: ['Finanzas', 'SUNAT'],
    description: 'Hemos implementado conexión directa con nuevos operadores OSE y cálculo automático avanzado de IGV para operaciones logísticas mixtas.'
  }
];
