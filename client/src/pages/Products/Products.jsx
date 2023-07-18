import React, { useState } from 'react'
// Components
import FilterBar from '../../components/FilterBar/FilterBar'
import ProductsData from '../../data/FetchData.ts'
import ProductCard from '../../components/ProductCard/ProductCard'

// Hooks
import './Products.css'
import useFetchCategories from '../../hooks/useFetchCategories'
import useFetchProduct from '../../hooks/useFetchProduct'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceFilter, setPriceFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  // Fetch products
  const products = useFetchProduct(ProductsData.fetchAllProducts)
  const categories = useFetchCategories(ProductsData.fetchCategories)

  const onSearch = (searchTerm) => {
    // Perform an action based on the search term
    // For example, update search results
  }

  const onFilterChange = (filters) => {
    // Perform an action based on the applied filters
    // For example, filter products based on selected filters
  }

  return (
    <>
      <div className="products">
        <div className="products-container">
          <FilterBar
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            searchTerm={searchTerm}
            priceFilter={priceFilter}
            dateFilter={dateFilter}
            categoryFilter={categoryFilter}
            setSearchTerm={setSearchTerm}
            setPriceFilter={setPriceFilter}
            setDateFilter={setDateFilter}
            setCategoryFilter={setCategoryFilter}
            categories={categories}
          />
          <div className="products-container-product">
              <div className="products-container-product-list">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
