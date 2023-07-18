import React from 'react'

export default function SearchFilter ({ searchTerm, onSearchChange })  {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  )
}