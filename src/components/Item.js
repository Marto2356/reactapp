import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {

    const producto = props.producto

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <Link to={`/item/${producto.id}`}><button>Ver detalle</button></Link>
        </div>
    )
}

export default Item