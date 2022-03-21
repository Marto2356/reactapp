import React from 'react'
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/carrito">
            <i className="fa-solid fa-cart-shopping cart"></i>
        </Link>
    )
}

export default CartWidget