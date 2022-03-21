import React, {useState} from 'react'

const ItemCount = ({stock,inicial,onAdd}) => {
    
    const [contador, setContador] = useState(inicial)

    function agregar() {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    function quitar(){
        if (contador > inicial){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
        <div className="botonera">
            <button className='sumar' onClick={agregar}>+</button>
            <h3 className='contador'>{contador}</h3>
            <button className='restar' onClick={quitar}>-</button>
            <button className="agregarCarrito" onClick={confirmar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount