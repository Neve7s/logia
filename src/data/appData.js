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
    description: 'Tu herramienta principal de ventas. Crea cotizaciones profesionales para carga marítima LCL, FCL y aérea en múltiples monedas con tipo de cambio actualizado. Calcula automáticamente impuestos aduaneros y desglósalos por tipo de servicio para que tus clientes tengan total claridad.',
    features: [
      'Historial completo de cada cotización con estados (Aprobado, Rechazado).',
      'Duplica cotizaciones en un clic y obtén un nuevo código al instante.',
      'Calcula costos por tarifa fija, peso, volumen o contenedor.'
    ],
    image: cotizadorImg,
    tag: 'Apps: Cotizador Pro'
  },
  {
    id: 'shipments',
    icon: 'fa-box-open',
    title: 'Shipments Control',
    description: 'Seguimiento completo de las cargas aprobadas. Registra fechas de salida y llegada, números de embarque y puertos. El sistema te avisa automáticamente qué cargas llegarán en los próximos 15 días para que nada se te escape.',
    features: [
      'Control visual del canal de aduana asignado (Verde, Rojo, Naranja).',
      'Actualización instantánea sin recargar la página.',
      'Genera automáticamente el Aviso de Llegada en PDF para tus clientes.'
    ],
    image: shipmentImg,
    tag: 'Apps: Gestión de Carga'
  },
  {
    id: 'facturacion',
    icon: 'fa-file-invoice',
    title: 'Facturación OSE/PSE',
    description: 'Emite facturas, boletas y notas de crédito electrónicas validadas directamente con SUNAT. Convierte tus servicios en comprobantes y recibos de caja con numeración automática y cálculo de impuestos integrado.',
    features: [
      'Comprobantes aprobados automáticamente por SUNAT.',
      'Cálculo automático de detracciones sin errores manuales.',
      'Exporta reportes financieros a Excel con un clic.'
    ],
    image: fiannza1Img,
    tag: 'Apps: Finanzas LogIA'
  },
  {
    id: 'maestros',
    icon: 'fa-database',
    title: 'Infraestructura Masters',
    description: 'Tu base de datos centralizada de clientes, proveedores, servicios, puertos y navieras. Toda la información que necesitas siempre actualizada y disponible para todos los módulos del sistema.',
    features: [
      'Busca clientes por RUC o DNI y autocompleta sus datos al instante.',
      'Catálogo de navieras listo para rastreo de contenedores.',
      'Cada vendedor solo ve sus propios clientes para mayor privacidad.'
    ],
    image: maestrosImg,
    tag: 'Maestros del Sistema'
  },
  {
    id: 'ats',
    icon: 'fa-user-tie',
    title: 'Reclutamiento (ATS)',
    description: 'Sistema de reclutamiento integrado. Publica convocatorias laborales y gestiona postulantes con sus CV en la nube, todo desde el mismo lugar donde operas tu agencia.',
    features: [
      'Flujo visual: de postulado → entrevistado → aceptado.',
      'Convierte un postulante en empleado activo con un clic.',
      'Envío automático de correos para coordinar entrevistas.'
    ],
    image: kpiImg,
    tag: 'Apps: RRHH ATS'
  },
  {
    id: 'configuracion',
    icon: 'fa-chart-line',
    title: 'Métricas & Configuraciones',
    description: 'Ten el control total del rendimiento de tu agencia. Monitorea la productividad de cada vendedor, personaliza la imagen de tu empresa y gestiona todas las configuraciones desde un solo lugar.',
    features: [
      'Personaliza firmas, logotipos y datos de empresa en tus documentos.',
      'Envío de correos automáticos a clientes y equipo.',
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
