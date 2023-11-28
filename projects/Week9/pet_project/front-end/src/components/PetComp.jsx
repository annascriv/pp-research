import { Link } from "react-router-dom";


export const Pet = ({ pet }) => {
  return (
    <ol>
      <li>Name: {pet.name}</li>
      <li>Breed: {pet.breed}</li>
      <li>Owner Id: {pet.owner}</li>
      <li>Age: {pet.age}</li>
    </ol>
  );
};