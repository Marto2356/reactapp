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
            carrito.map(item=>(
                <div key={item.producto.id} className="carrito">
                <p>{item.producto.nombre}</p>
                <p>${item.producto.precio}</p>
                <p>{item.cantidad}</p>
                <button onClick={()=>borrarDelCarrito(item.producto)} className="quitarCarrito">Eliminar del carrito</button>
                <button onClick={()=>limpiarCarrito()} className="quitarCarrito">Vaciar carrito</button>
                </div>
            ))
            }
        </>
    )
}

export default Carrito