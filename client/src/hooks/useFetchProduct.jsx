import { useState, useEffect } from "react"

export default function useFetchProduct(dataToFetch) {
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataToFetch()
      setState(result)
    }

    fetchData()
  }, [])

  return state
}
