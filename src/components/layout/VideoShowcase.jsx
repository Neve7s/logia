import React from 'react';

const VideoShowcase = () => {
  return (
    <section className="video-showcase-section">
      <div className="container-x">
        <div className="video-wrapper-premium">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
            title="LogIA Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
