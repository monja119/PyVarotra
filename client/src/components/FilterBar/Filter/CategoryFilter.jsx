import React from 'react'

export default function CategoryFilter ({ checked, categoryFilter, onFilterChange, onCategoryFilterChange, onClearFilter, categories})  {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onFilterChange} />
        Par catégorie
      </label>
      {checked && (
        <div>
          <select value={categoryFilter} onChange={onCategoryFilterChange}>
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button onClick={onClearFilter}>Supprimer</button>
        </div>
      )}
    </div>
  )
}