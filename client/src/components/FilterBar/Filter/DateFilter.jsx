import React from 'react'

export default function DateFilter ({ checked, dateFilter, onFilterChange, onDateFilterChange, onClearFilter})  {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onFilterChange}
        />
        Par date de publication
      </label>
      {checked && (
        <div>
          <select value={dateFilter} onChange={onDateFilterChange}>
            <option value="">Toutes les dates</option>
            <option value="newest">Plus récentes en premier</option>
            <option value="oldest">Plus anciennes en premier</option>
          </select>
          <button onClick={onClearFilter}>Supprimer</button>
        </div>
      )}
    </div>
  )
}