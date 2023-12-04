import { useEffect, useState } from "react"
import axios from 'axios'


export const PlantPage = () => {

    const [plants, setPlants] = useState([])

    const getPlants = async() => {
        let response = await axios.get("http://127.0.0.1:8000/api/v1/plants/")
        .catch((err)=> {
            console.log(err)
        })
        console.log(response.data.data)
        setPlants(response.data.data)
    }

    useEffect(()=> {
        getPlants()
    }, [])


    return (
        <>
            <h1>Plant Project</h1>
            {console.log(plants)}
            <ul>
                {plants.map((plant)=> (
                    <li>{plant.common_name}</li>
                ))}
            </ul>

            
        </>
    )
}