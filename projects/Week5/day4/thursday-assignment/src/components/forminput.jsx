import React from "react";
import axios from "axios";
import { useState } from "react";


const Submission = () => {

    const [drinkName, setdrinkName] = useState('');
    let drink = '';
    let ImgSrc='';

    const getDrinks = async(event) => {
        
        event.preventDefault()
        

    //    let drinkName = document.getElementById("drink")
        // console.log(drinkName)
        
        let response= await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
        );
        let drinks = response.data;
        drink = drinks.drinks[0]
        console.log(drinks.drinks[0]['strDrink'])
        console.log(drink)
        

       
      };   

      const handleInputChange = (event) => {
        event.preventDefault()
        setdrinkName(event.target.value)
      };

    return (
        <>
        <form onSubmit={getDrinks} >
            <input id="drink" placeholder="Enter your drink..."
            type="text" onChange={handleInputChange} value={drinkName}
            ></input>
            <button>Search!</button>
            </form>
            <h1>{drinkName}</h1>
            <img src={encodeURI(drink.strDrinkThumb)}/>        
             </>
 
)
}

export default Submission;