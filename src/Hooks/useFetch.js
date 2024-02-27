import { useState, useEffect } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}
