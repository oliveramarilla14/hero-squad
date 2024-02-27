import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'
import useFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom'

function Hero () {
  const { theme } = useContext(ThemeContext)
  const params = useParams()

  const { data, loading } = useFetch(`https://www.swapi.tech/api/people/${params.uid}`)

  const properties = data?.result?.properties
  return (
    <article className={`hero-big ${theme}`}>
      {loading && <h1>loading...</h1>}
      {data &&
        <div className='data'>
          <h1>{properties.name}</h1>
          <br />
          <p> <b> Birth Year: </b>{properties.birth_year}</p>
          <p> <b> Height: </b>{properties.height}</p>
          <p> <b> Skin Color: </b>{properties.skin_color}</p>
          <p> <b> gender: </b>{properties.gender}</p>
          <p> <b> Eye Color: </b>{properties.eye_color}</p>
          <p> <b> Hair Color: </b>{properties.hair_color}</p>

        </div>}
    </article>

  )
}

export default Hero
