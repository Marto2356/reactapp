import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {contexto} from './CartContext'
import {Link} from 'react-router-dom'

const ItemDetail = (props) => {
    const { nombre, generos, autor, fecha, precio,img } = props.producto;

    const carritoContext = useContext(contexto)
    console.log(carritoContext)

    const onAdd = (unidadesSeleccionadas) => {
        carritoContext.agregarAlCarrito(props.producto,unidadesSeleccionadas)
        setEsconderBoton(false)
    }

    const [esconderBoton,setEsconderBoton] = useState(true)

    return (
        <div>
            <h1>Producto: {nombre}</h1>
            <img src={img} alt="" />
            <h3>Género: {generos}</h3>
            <h3>Autor: {autor}</h3>
            <h3>Fecha: {fecha}</h3>
            <h3>Precio: ${precio}</h3>
            {esconderBoton ? <ItemCount className="botonera" inicial={1} stock={10} onAdd={onAdd}/> : <Link to="/carrito">Ir al carrito</Link>}
        </div>
    )
}

export default ItemDetail