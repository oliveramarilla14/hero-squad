/* eslint-disable react/jsx-closing-tag-location */
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Card from './Card'
import './styles/cards.css'
import { useEffect, useState } from 'react'

function CardList () {
  const navigate = useNavigate()
  const params = useParams()
  const [url, setUrl] = useState(`https://www.swapi.tech/api/people?page=${params.page}&limit=12`)
  useEffect(() => {
    if (!params.page && !params.search)setUrl('https://www.swapi.tech/api/people?page=1&limit=12')
    else if (params.page)setUrl(`https://www.swapi.tech/api/people?page=${params.page}&limit=12`)
    else if (params.search) setUrl(`https://www.swapi.tech/api/people/?name=${params.search}`)
  }, [params])

  const { data, loading } = useFetch(url)
  const handlePageChange = (page) => {
    if (isNaN(page))navigate('../2')
    else navigate(`../${page}`)
  }

  return (
    <>
      {loading
        ? <h1>loading...</h1>
        : <main className='card-list'>
          {data.results && data.results.map(hero => {
            return <Card hero={hero} key={hero.uid} id={hero.uid} />
          })}
          {data.result && data.result.map(hero => {
            return <Card hero={hero.properties} key={hero.uid} id={hero.uid} />
          })}
        </main>}
      <footer className='pagination'>
        {params.page > 1 && <button onClick={() => handlePageChange(+params.page - 1)}>Previous</button>}
        {data.next && <button onClick={() => handlePageChange(+params.page + 1)}>Next</button>}
      </footer>
    </>
  )
}

export default CardList
