import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';




function BasicExample({ name, image, species, status, id, setFavorites, favorites }) {

const navigate = useNavigate()


  const isCharacterInFavorites = favorites.some((char) => char.id === id);

  const handleFavorites = () => {
    if (isCharacterInFavorites) {
      const updatedFavorites = favorites.filter((char) => char.id !== id);
      setFavorites(updatedFavorites);
    } else {
      if (favorites.length < 4) {
        setFavorites([...favorites, { id: id, name: name, image: image }]);
      } else {
        alert("You cannot have more than four favorites");
      }
    }
  };

 

  return (


    <Card style={{ width: '18rem', display:'flex', flexDirection:'column'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <ul>
                <li>
                    {species}
                </li>
                <li>
                    {status}
                </li>
            </ul>
        </Card.Text>
        <div id="card-buttons">
        {isCharacterInFavorites ? (
            <Button variant="danger" onClick={handleFavorites}>
              Remove from Favorites
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleFavorites}>
              Add to Favorites
            </Button>
          )}
        
        {/* <Button variant='warning' onClick={AddFavorite} >Favorite</Button> */}
        <Button onClick={()=>navigate(`/character/${id}`)} variant="primary">View Character Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;