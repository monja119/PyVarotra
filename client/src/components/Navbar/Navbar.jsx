import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// Media
import DefaultProfile from "./avatar.svg"

// Import css
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <header className="nav">
        <div className="nav-item">
          <ul>
            <li><NavLink to="">Acceuil</NavLink></li>
            <li><NavLink to="products">Produits</NavLink></li>
          </ul>
        </div>
        <div className="nav-logo">LogoHere</div>
        {/* <div className="nav-search">
          <form className="nav-search-form">
            <input type="text" placeholder="Chercher un produit"/>
            <button>Rechercher</button>
          </form>
        </div> */}
        <div className="nav-profile">
          <div className="nav-profile-cart">
            <NavLink to="cart"><ion-icon name="bag-handle-outline"></ion-icon></NavLink>
          </div>
          <div className="nav-profile-picture">
            <NavLink to="profile"><img src={DefaultProfile} alt="profile" /></NavLink>
          </div>
        </div>
        <div className="nav-connexion">
          <div className="info">Se connecter</div>
          <Link to="login">Connexion</Link>
        </div>
      </header>
    </>
  )
}
