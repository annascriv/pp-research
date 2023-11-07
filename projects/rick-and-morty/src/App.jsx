import { useState, useEffect } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './components/navbar'
import Header from './components/Header'


function App() {
  
  const [favorites, setFavorites] = useState([])

  useEffect(()=> {
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <NavBar/>
      <Outlet context={{favorites, setFavorites}}/>
    </>
  )
}

export default App
