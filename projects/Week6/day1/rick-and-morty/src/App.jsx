import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
     
    </>
  )
}

export default App
