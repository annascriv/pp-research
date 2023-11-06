import React from "react";
import BasicExample from "../components/card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const CharacterPage = () => {

    const [characters, setCharacters] = useState([])

    const getCharacters = async() => {
        let response = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(response.data.results)
        setCharacters(response.data.results);
    }

    useEffect(()=> {
        getCharacters();
    }, []);
    
    return (
        <>
        <h1>Characters</h1>
        {
            characters.map((character, idx)=> (
                <BasicExample
                key={idx}
                name={character.name}
                image={character.image}
                species={character.species}
                status = {character.status}
                />
            ))
        }
         </>
    )
   

}

export default CharacterPage;