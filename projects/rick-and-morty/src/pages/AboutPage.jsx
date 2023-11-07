import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import BasicExample from "../components/table";
import NavBar from "../components/navbar";


const AboutPage = () => {

    const [episodes, setEpisodes] = useState([])

    const getEpisodes = async() => {
        let response = await axios.get("https://rickandmortyapi.com/api/episode");
        setEpisodes(response.data.results)
        
    };

    useEffect(()=> {
        getEpisodes();
    }, []);
    
    return (
        <>
        {/* <NavBar/> */}
        <h1>Episode Info</h1>
        
        {
            episodes.map((episode, idx)=> (
                <BasicExample data={episodes}
                key={idx}
                id = {episode.id}
                name={episode.name}
                airdate={episode.air_date}
                episode={episode.episode}
                />
            ))
        }
        </>
    )
}

export default AboutPage;