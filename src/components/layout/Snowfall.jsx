import React from 'react';

// Deterministic flakes: no Math.random(), so every render is identical.
const FLAKES = [
  { left: 3, size: 22, delay: -2, duration: 16, drift: 34, opacity: 0.5 },
  { left: 8, size: 14, delay: -7, duration: 21, drift: -26, opacity: 0.35 },
  { left: 13, size: 18, delay: -12, duration: 18, drift: 46, opacity: 0.55 },
  { left: 18, size: 26, delay: -4, duration: 23, drift: -18, opacity: 0.4 },
  { left: 23, size: 12, delay: -15, duration: 15, drift: 30, opacity: 0.45 },
  { left: 28, size: 20, delay: -9, duration: 20, drift: -40, opacity: 0.5 },
  { left: 34, size: 16, delay: -1, duration: 17, drift: 22, opacity: 0.35 },
  { left: 39, size: 24, delay: -13, duration: 22, drift: -32, opacity: 0.55 },
  { left: 44, size: 13, delay: -6, duration: 19, drift: 38, opacity: 0.4 },
  { left: 49, size: 18, delay: -17, duration: 24, drift: -20, opacity: 0.5 },
  { left: 54, size: 28, delay: -3, duration: 18, drift: 28, opacity: 0.35 },
  { left: 59, size: 15, delay: -10, duration: 21, drift: -44, opacity: 0.55 },
  { left: 64, size: 21, delay: -5, duration: 16, drift: 36, opacity: 0.45 },
  { left: 69, size: 12, delay: -14, duration: 23, drift: -24, opacity: 0.4 },
  { left: 74, size: 25, delay: -8, duration: 20, drift: 18, opacity: 0.5 },
  { left: 79, size: 17, delay: -16, duration: 22, drift: -36, opacity: 0.35 },
  { left: 84, size: 22, delay: -2, duration: 17, drift: 32, opacity: 0.55 },
  { left: 88, size: 14, delay: -11, duration: 24, drift: -18, opacity: 0.4 },
  { left: 92, size: 19, delay: -6, duration: 19, drift: 24, opacity: 0.45 },
  { left: 96, size: 27, delay: -18, duration: 21, drift: -30, opacity: 0.5 },
];

const Snowfall = () => (
  <div className="hero-snow" aria-hidden="true">
    {FLAKES.map((flake, index) => (
      <span
        key={index}
        className="snowflake"
        style={{
          left: `${flake.left}%`,
          fontSize: `${flake.size}px`,
          animationDelay: `${flake.delay}s`,
          animationDuration: `${flake.duration}s`,
          '--flake-drift': `${flake.drift}px`,
          '--flake-opacity': flake.opacity,
        }}
      >
        ❄
      </span>
    ))}
  </div>
);

export default Snowfall;