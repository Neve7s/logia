import React, { useState, useEffect } from 'react';
import img1 from '../../assets/ecosistema/5.png';
import img2 from '../../assets/ecosistema/6.png';

const images = [img1, img2];

const HeroCrossfade = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-crossfade-section">
      <div className="container-x">
        <div className="hero-crossfade-wrapper">
          <div className="hero-crossfade-glow"></div>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`LogIA Dashboard ${i + 1}`}
              className={`hero-crossfade-img ${i === current ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCrossfade;
