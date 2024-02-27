import { useContext, useRef } from 'react'
import './styles/header.css'
import ThemeContext from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

function Header () {
  const { theme, handleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const refInput = useRef()
  const handleSearch = () => {
    if (refInput.current.value) {
      navigate(`/search/${refInput.current.value}`)
      refInput.current.value = ''
    }
  }
  const handleStart = () => {
    navigate('/')
  }

  return (
    <header id='header'>
      <h1 onClick={handleStart}>Star Wars Squad 🦸</h1>
      <nav>
        {theme === 'light'
          ? <i className='fa-regular fa-sun' onClick={() => handleTheme('dark')} />
          : <i className='fa-solid fa-moon' onClick={() => handleTheme('light')} />}

        <label htmlFor='search-bar'>
          <input placeholder='search...' ref={refInput} type='text' id='search-bar' />
          <button onClick={handleSearch}>
            <i className='fa-solid fa-magnifying-glass' />
          </button>
        </label>
      </nav>
    </header>
  )
}

export default Header
