import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <nav className="navbar max-width">
        <a href="#"><img src="images/logo.svg" alt="logo" /></a>
        <ul className="links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Produits</a></li>
          <li><a href="#">Paniers</a></li>
          <li className="btn signin"><a href="#">Sign In</a></li>
          <li className="btn join"><a href="#">Join</a></li>
        </ul>
      </nav>
      <p className="logo">
        <Link href="/">Py-varotra</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;
