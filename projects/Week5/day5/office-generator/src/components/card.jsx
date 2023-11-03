import Card from 'react-bootstrap/Card';

function BasicExample({ name, gender, actor, spouse, job }) {


  return (
    <Card className='card' style={{ width: '18rem', display:'flex', justifyContent:'center'}}>
      <Card.Img variant="top" src="./src/images/officelogo.jpeg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <ul>
                <li>
                   Actor: {actor}
                </li>
                <li>
                    Gender: {gender}
                </li>
                <li>
                    Spouse: {spouse}
                </li>
                <li>
                    Job: {job}
                </li>
            </ul>
            
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;