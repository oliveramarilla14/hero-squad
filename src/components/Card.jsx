import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

function Card ({ hero, id }) {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleView = (uid) => {
    navigate(`/people/${uid}`)
  }
  return (
    <article className={`card ${theme}`}>
      <div className='name'>
        <h2>{hero.name}</h2>
      </div>
      <button className={`card-btn ${theme}`} onClick={() => handleView(id)}>View More</button>

    </article>
  )
}

export default Card
