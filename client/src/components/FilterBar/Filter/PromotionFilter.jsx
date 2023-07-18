import React from 'react'

export default function PromotionFilter ({ checked, onFilterChange, onClearFilter })  {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onFilterChange}
        />
        En promotion
      </label>
      {checked && (
        <button onClick={onClearFilter}>Supprimer</button>
      )}
    </div>
  )
}