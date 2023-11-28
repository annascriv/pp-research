import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from './components/NavBar'
import { Outlet } from 'react-router'


function App() {


  return (
    <>
    <Container>
      <Navbar/>
      <Row style={{textAlign:'center'}}> 
      <h1>Welcome to the Pet Store!</h1>
      </Row>

      <Outlet/>
      <Row style={{textAlign:"center"}}>

      </Row>


    </Container>

    </>
  )
}

export default App
