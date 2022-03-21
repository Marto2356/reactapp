import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/generos/G1">Género1</Link>
                <Link to="/generos/G2">Género2</Link>
                <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar