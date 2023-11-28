import { Link } from "react-router-dom";
import { Pet } from "./PetComp";

export const Owner = ({ owner }) => {
  return (
    <ul>
      <h2>{owner.name}</h2>
      <li>Email: {owner.email_address}</li>
      <li>Age: {owner.age}</li>


      <h5>Pets</h5>
      {owner.pets.map((pet) => (
        <Pet pet={pet} />
      ))}
    </ul>
  );
};