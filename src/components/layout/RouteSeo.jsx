import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_META } from '../../seo/routeMeta';

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function RouteSeo() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const meta = ROUTE_META[pathname] || {
      title: 'Página no encontrada — LogIA',
      description: 'La página que buscas no existe o cambió de ubicación. Vuelve al inicio o explora las soluciones de LogIA.',
    };

    if (meta.title) {
      document.title = meta.title;
      setProperty('og:title', meta.title);
      setMeta('twitter:title', meta.title);
    }

    if (meta.description) {
      setMeta('description', meta.description);
      setProperty('og:description', meta.description);
      setMeta('twitter:description', meta.description);
    }

    const canonicalUrl = `https://logia.lat${pathname === '/' ? '/' : pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    setProperty('og:url', canonicalUrl);
    setMeta('twitter:url', canonicalUrl);

    document.getElementById('route-jsonld')?.remove();
    if (meta.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'route-jsonld';
      script.textContent = JSON.stringify(meta.jsonLd);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}

export default RouteSeo;
