import React from 'react';
import data from '../../data.json';

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#hero">
        {data.site.brand}
      </a>
      <nav className="nav-links" aria-label="Navegación principal">
        {data.navLinks.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
