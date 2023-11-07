import React from "react";
import BasicExample from "../components/card";
import { useOutletContext } from 'react-router-dom'

const Favorites=() => {
    const {favorites, setFavorites} = useOutletContext()

    return (
        <>
        <h1>Favorites</h1>
        {favorites.map((char)=> (
            <BasicExample
            id={char.id}
            name={char.name}
            image={char.image}
            setFavorites={setFavorites}
            favorites={favorites}
            />))}

        </>
    )
}

export default Favorites;