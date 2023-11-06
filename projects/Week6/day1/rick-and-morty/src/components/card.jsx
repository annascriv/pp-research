import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ name, image, species, status}) {
  return (
    <Card style={{ width: '18rem', display:'flex'}}>
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;