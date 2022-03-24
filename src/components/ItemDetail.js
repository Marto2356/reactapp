import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {contexto} from './CartContext'

const ItemDetail = (props) => {
    const { nombre, generos, autor, fecha, precio,img } = props.producto;

    const carritoContext = useContext(contexto)
    console.log(carritoContext)

    const onAdd = (unidadesSeleccionadas) => {
        carritoContext.agregarAlCarrito(props.producto,unidadesSeleccionadas)
    }

    return (
        <div>
            <h1>Producto: {nombre}</h1>
            <img src={img} alt="" />
            <h3>Género: {generos}</h3>
            <h3>Autor: {autor}</h3>
            <h3>Fecha: {fecha}</h3>
            <h3>Precio: ${precio}</h3>

            <ItemCount className="botonera" inicial={1} stock={10} onAdd={onAdd} producto={props.producto}/>
        </div>
    )
}

export default ItemDetail