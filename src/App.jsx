import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardList from './components/CardList'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

function App () {
  const { theme } = useContext(ThemeContext)
  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/:page?/' element={<CardList />} />
            <Route path='/search/:search?' element={<CardList />} />
            <Route path='/people/:uid?' element={<Hero />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
