import { useState, useEffect } from 'react'

export default function useFetchCategories(dataToFetch) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await dataToFetch()
      setCategories(result)
    }

    fetchCategories()
  }, [])

  return categories
}