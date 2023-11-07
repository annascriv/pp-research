import {Link} from 'react-router-dom'

const Header =()=> {
    
    return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/characters">Characters</Link>
    <Link to="/favorites">Favorites</Link>
    </>
)
}
export default Header;