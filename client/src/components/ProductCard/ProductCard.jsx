import React from 'react'
import './ProductCard.css'



// Cart System
import { useCart } from "react-use-cart"



export default function ProductCard({ product }) {
  const { id, name, price, media } = product

  // Hooks 
  const { addItem } = useCart()
  
  // Fonction pour ajouter une espace tous les 3 chiffres (puissance de 100)
  function formatPriceWithSpaces(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  // Utilisez la fonction pour formater le prix
  const formattedPrice = formatPriceWithSpaces(price)

  return (
    <div className="product-card">
      <img src={media.link} alt={name} className="product-image" />
      <div className="info-section">
        <div className="info-section-left">
          <h3 className="product-title">{name}</h3>
          <p className="product-price">{formattedPrice} MGA</p>
        </div>
        <div className="info-section-right">
          <button className="add-to-cart-btn" onClick={() => addItem(product)}>
            <ion-icon name="cart" className="add-to-cart-icon"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

