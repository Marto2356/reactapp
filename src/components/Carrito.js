import React from 'react'
import { useContext, useState } from 'react'
import { contexto } from './CartContext'
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "./Firebase"

const Carrito = () => {

    const {carrito,borrarDelCarrito, limpiarCarrito, calcularTotal} = useContext(contexto)
    
    const [compra , setCompra] = useState([])
    let infoOrden = []
    
    const handleClick = () => {
        
        const orden = {
            buyer : {
                nombre : "Martin",
                apellido : "Morales",
                telefono:"2915233728",
                email : "martin.morales2356@gmail.com"
            },
            items : carrito,
            date : serverTimestamp(),
            total : calcularTotal()
        }
        const ordenesCollection = collection(db,"ordenes")
        const pedido = addDoc(ordenesCollection,orden)
       
        infoOrden = orden
        pedido.then(res=>{console.log(compra)
          setCompra({...infoOrden, id:res.id})})
        
      }
      
      console.log(compra)

    return (
        <>
            <h2>Carrito</h2>
            <h3> Total: ${calcularTotal()}</h3>
            {
            carrito.map(item=>(
                <div key={item.producto.id} className="carrito">
                <p>{item.producto.nombre}</p>
                <p>${item.producto.precio}</p>
                <p>{item.cantidad}</p>
                <button onClick={()=>borrarDelCarrito(item.producto)} className="quitarCarrito">Eliminar del carrito</button>
                <button onClick={()=>limpiarCarrito()} className="quitarCarrito">Vaciar carrito</button>
                {/* <button onClick={handleClick} className="quitarCarrito">Confirmar compra</button> */}
                </div>
            ))
            }

            <div className="cardContainer"  style={{ width: "18rem" }}>
                <p> Usuario: </p>
                <p>Nombre: {compra.buyer?.nombre} </p>
                <p> Apellido: {compra.buyer?.apellido} </p>
                <p> Contacto: {compra.buyer?.email} </p>
                <p>Orden de Compra:  {compra.id} </p>
                <p>Total: ${compra.total} </p> 
               <button onClick={handleClick}>Confirmar compra</button>
            </div>
         
        </>
    )
}

export default Carrito