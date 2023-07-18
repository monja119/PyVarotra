import React from 'react'

// Css
import "./Cart.css"

// Cart system
import { useCart } from 'react-use-cart'

export default function Cart() {

  // Fonction pour ajouter une espace tous les 3 chiffres (puissance de 100)
  function formatPriceWithSpaces(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }


  
  // Hooks
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart()

  
  // Format Total Price
  const formatedTotalPrice = formatPriceWithSpaces(cartTotal)

  if(isEmpty)
  {
    return (
      <>
        <div className="Cart">
          <div className="Cart-header">
            <h2>Votre panier</h2>
          </div>
          <div>Votre panier est vide</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="Cart">
        <div className="Cart-container">
          <h2 style={{display: "none"}}>Cart ({totalUniqueItems} total items: {totalItems})</h2>
          <div className="Cart-container-items">
            {items.map((item, index) => {
                const formatedPrice = formatPriceWithSpaces(item.price)
                return (  
                  <div key={index} className="Cart-container-items-item">
                    <img src={item.media.link} alt="product-item"/>
                    <div className="Cart-container-items-item-right">
                      <div className="Cart-container-items-item-right-top">
                        <h2>{item.name.toUpperCase()}</h2>
                        <button onClick={() => removeItem(item.id)}>
                          <ion-icon className="trash" name="trash-bin-outline"></ion-icon>
                        </button>
                      </div>
                      <div className="Cart-container-items-item-right-middle">
                        <div className="descritpion">{item.description}</div>
                      </div>
                      
                      <div className="Cart-container-items-item-right-bottom">
                        <div className="Cart-container-items-item-right-bottom-left">
                          <h2>{formatedPrice} MGA</h2>
                        </div>
                        <div className="Cart-container-items-item-right-bottom-right">
                          
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                          <div className="indicator">
                            <h2>{item.quantity}</h2>
                          </div>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })}
          </div>
          <div>
            <h2>Total price: {formatedTotalPrice} MGA</h2>
            <button onClick={() => emptyCart()}>Vider le panier</button>
          </div>
        </div>
      </div>
    </>
  )
}
