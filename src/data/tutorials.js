// ============================================================
// Tutoriales públicos — agrega tantos videos como necesites.
// `youtubeUrl` acepta la URL normal, youtu.be, shorts o embed.
// ============================================================

export const TUTORIALS = [
  {
    id: 'registro-empresa',
    title: 'Cómo registrar tu empresa en LogIA',
    description:
      'Crea tu cuenta, configura tu empresa y empieza a operar en minutos. El punto de partida para todo el equipo.',
    category: 'Primeros pasos',
    youtubeUrl: 'https://www.youtube.com/watch?v=Uoq83P7fj4g',
  },
];

export function getYoutubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : url;
}
