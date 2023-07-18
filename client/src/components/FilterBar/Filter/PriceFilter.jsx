import React from 'react'

export default function PriceFilter ({ checked, priceFilter, onFilterChange, onPriceFilterChange, onClearFilter})  {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onFilterChange}
        />
        Par prix
      </label>
      {checked && (
        <div>
          <select value={priceFilter} onChange={onPriceFilterChange}>
            <option value="">Tous les prix</option>
            <option value="low">Prix croissant</option>
            <option value="high">Prix décroissant</option>
          </select>
          <button onClick={onClearFilter}>Supprimer</button>
        </div>
      )}
    </div>
  )
}