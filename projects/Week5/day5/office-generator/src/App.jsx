import { useState, useEffect } from 'react'
import axios from "axios"
import BasicExample from './components/card' 
import './App.css'


function App() {

  const [character, setCharacter] = useState({})


  useEffect(()=> { 
    let randomNum = Math.floor(Math.random()*50)+1 
    console.log(randomNum)
    const getCharacter = async() => {

    
      let response = await axios.get(`https://theofficeapi.dev/api/character/${randomNum}`)
      // const newObj = { name: response.data.name, 
      //                 gender: response.data.gender, 
      //                 marital: response.data.marital, 
      //                 job: response.data.job,
      //                 actor: response.data.actor }
                      setCharacter(response.data)
                      console.log(response.data) 
  }
  getCharacter() 
}, [])

    const buttonClick = () => {
      location.reload()
    }


  return (
    <> <div  > 
      <h1></h1>
    <BasicExample name ={character.name}
    actor = {character.actor}
    gender = {character.gender}
    job = {character.job}
    spouse = {character.spouse} className='card'/>
    <button class='card' onClick={buttonClick}>Click for a new Character!</button>

    </div>

    {/* <div className='container'>
      <h1>{character.name}</h1>
      <ul>
        <li>
            Actor: {character.actor}
        </li>
        <li>
            Gender: {character.gender}
        </li>
        <li>
            Job: {character.job}
        </li>
        <li>
            Spouse: {character.marital}
        </li>
      </ul>
      </div> */}

    </>
  )
}

export default App
