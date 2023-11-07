import Table from 'react-bootstrap/Table';

function BasicExample({ id, name, airdate, episode }) {


  return (
  
    <Table striped bordered hover>
      <thead>
        {/* <tr>
          <th></th>
          <th>Name</th>
          <th>Airdate</th>
          <th>Episode #</th>
        </tr> */}
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{airdate}</td>
          <td>{episode}</td>
        </tr>
      </tbody>
    </Table>
  );
  
}

export default BasicExample;