import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/generos/G1">Género1</Link></li>
                <li><Link to="/generos/G2">Género2</Link></li>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar