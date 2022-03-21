import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const { nombre, generos, autor, fecha, precio } = props.producto;

    const onAdd = (unidadesSeleccionadas) => {
        console.log("console.log desde ItemDetail")
        console.log(unidadesSeleccionadas)
    }

    return (
        <div>
            <h1>Producto: {nombre}</h1>
            <h3>Género: {generos}</h3>
            <h3>Autor: {autor}</h3>
            <h3>Fecha: {fecha}</h3>
            <h3>Precio: ${precio}</h3>

            <ItemCount className="botonera" inicial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail