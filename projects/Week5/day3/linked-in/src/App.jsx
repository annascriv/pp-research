import { useState } from 'react'
import './App.css'
import './components/header.css'
import Header from './components/header';
import Body from './components/body';
import './components/body.css'
// import Body from './components/body';
// import linkedinlogo from './images/linkedinlogo.png'


function App() {

  return (
    <>
    <div id="header-container">
       {/* <header><Header></Header></header> */}
        <Header />
        
      </div>
    <div id="body-container">
      <Body />

    </div>
  </>
  )
}

export default App
