import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'

const Navbar = () => {
    return (
        <>
        <Row style={{textAlign:"center"}}>
            <Link to='/'>Home</Link>
            <Link to='pets'>Pets</Link>
            <Link to='owners'>Owners</Link>

        </Row>
        
        </>
    )
}

export default Navbar;