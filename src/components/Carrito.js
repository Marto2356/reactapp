import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Carrito = () => {

    const {carrito,borrarDelCarrito, limpiarCarrito} = useContext(contexto)
    console.log(carrito)

    return (
        <>
            <h2>Carrito</h2>
            {
            carrito.map(elemento=>(
                <div key={elemento.producto.id} className="carrito">
                <p>{elemento.producto.nombre}</p>
                <p>${elemento.producto.precio}</p>
                <button onClick={()=>borrarDelCarrito(elemento.producto.id)} className="quitarCarrito">Eliminar del carrito</button>
                <button onClick={()=>limpiarCarrito()} className="quitarCarrito">Vaciar carrito</button>
                </div>
            ))
            }
        </>
    )
}

export default Carrito