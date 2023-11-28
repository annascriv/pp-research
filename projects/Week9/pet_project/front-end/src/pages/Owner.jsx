import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react'
import { Owner } from '../components/ownercomp'

export const OwnerPage = () => {

    const [owners, setOwners] = useState([])

    const getOwners = async() => {
        let response = await axios.get("http://127.0.0.1:8000/api/v1/owners/")
        .catch((err)=> {
            console.log('getOwners err', err)
        })
        setOwners(response.data)
    }

    useEffect(()=> {
        getOwners();
    }, []);


    return (
        
        <Row >
            <h2>Owners</h2>
            {owners.map((own, idx)=>(
                <Owner owner={own}/>
                
            ))}
        </Row>
        
        
    )
}