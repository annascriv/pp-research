import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react'
import { Pet } from '../components/PetComp'

export const PetsPage = () => {

    const [pets, setPets] = useState([])

    const getPets = async()=> {
        let response = await axios.get("http://127.0.0.1:8000/api/v1/pets/")
        .catch((err)=> {
            console.log('getPets err', err)
        });

        setPets(response.data)
    }

    useEffect(()=> {
        getPets();
    }, [])


    return (
        <>
        <Row >
            <h2>Pets</h2>
            {pets.map((pet, idx)=> (
                <Pet pet={pet}/>
            ))}
        </Row>
        
        </>
    )
}