import React, {useState} from 'react'

import "./FilterBar.css"

// Filter
import CategoryFilter from './Filter/CategoryFilter'
import DateFilter from './Filter/DateFilter'
import PriceFilter from './Filter/PriceFilter'
import PromotionFilter from './Filter/PromotionFilter'
import SearchFilter from './Filter/SearchFilter'

export default function FilterBar({ 
  onSearch, onFilterChange, 
  searchTerm, priceFilter, dateFilter, categoryFilter,
  setSearchTerm, setPriceFilter, setDateFilter, setCategoryFilter, 
  categories}) 
{
  // State
  const [selectedFilters, setSelectedFilters] = useState([])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  const handleFilterChange = (filter) => {
    const updatedFilters = [...selectedFilters]
    const filterIndex = updatedFilters.indexOf(filter)

    if (filterIndex > -1) {
      updatedFilters.splice(filterIndex, 1)
    } else {
      updatedFilters.push(filter)
    }

    setSelectedFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value)
    onFilterChange('price')
  }

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value)
    onFilterChange('date')
  }

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value)
    onFilterChange('category')
  }

  const clearFilter = (filter) => {
    const updatedFilters = selectedFilters.filter((f) => f !== filter)
    setSelectedFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const getFilterName = (filter) => {
    switch (filter) {
      case 'date':
        return 'Date de publication'
      case 'promotion':
        return 'Promotion'
      case 'category':
        return 'Catégorie'
      case 'price':
        return 'Prix'
      default:
        return ''
    }
  }

  return (
    <>
      <div className="filter-bar">
        <div className="selected-filters">
          <h3>Filtres appliqués</h3>
          <div className="separator"></div>
          {selectedFilters.length > 0 && (
            <ul>
              {selectedFilters.map((filter) => (
                <li key={filter}  onClick={() => clearFilter(filter)}>
                  {getFilterName(filter)} <div className="x"><ion-icon name="close-outline"></ion-icon></div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="filter-bar-search">
          <h3>Rechercher un produit</h3>
          <div className="separator"></div>
          <SearchFilter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>

        <PromotionFilter
          checked={selectedFilters.includes('promotion')}
          onFilterChange={() => handleFilterChange('promotion')}
          onClearFilter={() => clearFilter('promotion')}
        />

        <PriceFilter
          checked={selectedFilters.includes('price')}
          priceFilter={priceFilter}
          onFilterChange={() => handleFilterChange('price')}
          onPriceFilterChange={handlePriceFilterChange}
          onClearFilter={() => clearFilter('price')}
        />

        <DateFilter
          checked={selectedFilters.includes('date')}
          dateFilter={dateFilter}
          onFilterChange={() => handleFilterChange('date')}
          onDateFilterChange={handleDateFilterChange}
          onClearFilter={() => clearFilter('date')}
        />

        <CategoryFilter
          checked={selectedFilters.includes('category')}
          categoryFilter={categoryFilter}
          onFilterChange={() => handleFilterChange('category')}
          onCategoryFilterChange={handleCategoryFilterChange}
          onClearFilter={() => clearFilter('category')}
          categories={categories}
        />
      </div>
    </>
  )
}
