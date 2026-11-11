import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // No interferir con anchors internos (p. ej. el índice de un documento legal).
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
