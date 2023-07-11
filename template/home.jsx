import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content max-width">
        <h2>Py-varotra, la référence de vos achats en ligne</h2>
        <div className="search-field">
          <input type="text" placeholder="Rechercher vos produits içi..." />
          <span className="material-symbols-outlined search-btn">search</span>
        </div>
        <div className="popular-tags">
          Produits:
          <ul className="link">
            <li><a href="#">Cosmétique</a></li>
            <li><a href="#">Appareil technologique</a></li>
            <li><a href="#">Bricolage</a></li>
            <li><a href="#">Meuble</a></li>
          </ul>
        </div>
      </div>
      <Navbar />
    </section>
  );
}

export default HeroSection;
