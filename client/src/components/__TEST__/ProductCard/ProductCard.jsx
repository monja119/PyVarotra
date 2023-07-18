import React from 'react'
import "./ProductCard.css"
export default function ProductCard ({ product, addToCart }) 
{
  const { id, title, price, image } = product

  const handleAddToCart = () => {
    addToCart(id);
  }

  return (
    <>
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="info-section">
                <div className="info-section-left">
                    <h3 className="product-title">{title}</h3>
                    <p className="product-price">{price} MGA</p>
                </div>
                <div className="info-section-right">
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

