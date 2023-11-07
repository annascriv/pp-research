import React from "react";
import BasicExample from "../components/card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import NavBar from "../components/navbar";
import { useOutletContext } from 'react-router-dom'


const CharacterPage = () => {

    const [characters, setCharacters] = useState([])
    const {favorites, setFavorites} = useOutletContext()


    const getCharacters = async() => {
        let results = []
        for (let i=1;i<=2;i++) {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
        console.log(response.data.results)
        results = results.concat(response.data.results)
        }
        setCharacters(results);
    }

    useEffect(()=> {
        getCharacters();
    }, []);


    
    
    return (
        <>
        {/* <NavBar/> */}
        <div className='character-page-container' >
        <h1 >Characters</h1>
        
        <div className="character-container" >
        
        {
            characters.map((character, idx)=> (

                <BasicExample
                key={idx}
                id={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                status = {character.status}
                setFavorites={setFavorites}
                favorites={favorites}
                />
            ))
        }
        </div>
        </div>
        {/* <div>
            <Favorites 
            characters={characters}
            onFavoritedCharacter={handleFavorite}/>

        </div> */}
         </>
    )
   

    }

export default CharacterPage;