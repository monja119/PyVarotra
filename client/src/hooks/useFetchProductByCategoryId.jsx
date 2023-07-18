import { useState, useEffect } from "react"

export default function useFetchProductByCategoryId(dataToFetch, categoryId) {
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataToFetch(categoryId)
      setState(result)
    }

    fetchData()
  }, [categoryId, dataToFetch])

  return state
}