import React from 'react'

const ItemDetail = (props) => {
    const { nombre, generos, autor, fecha, precio } = props.producto;

    return (
        <div>
            <h1>Producto: {nombre}</h1>
            <h3>Género: {generos}</h3>
            <h3>Autor: {autor}</h3>
            <h3>Fecha: {fecha}</h3>
            <h3>Precio: ${precio}</h3>
        </div>
    )
}

export default ItemDetail