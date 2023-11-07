import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

const CharacterDetailsPage = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    console.log(id)


    const getCharacter = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(response.data)
        console.log(response.data)
    }

    useEffect(()=> {
        getCharacter()
    }, [])

    return (
        <>
        <h2>{character.name}</h2>
        <img src={character.image}></img>
        <ul>Character's Details:
            <li>Species: {character.species}</li>
            <li>This character is currently: {character.status}</li>
            <li></li>
        </ul>
        </>
    )
}
export default CharacterDetailsPage;