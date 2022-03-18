import React, {useState} from 'react'

const ItemCount = (props) => {
    
    const [contador, setContador] = useState(props.inicial)

    function agregar() {
        if (contador < props.stock){
            setContador(contador + 1)
        }
    }

    function quitar(){
        if (contador > props.inicial){
            setContador(contador - 1)
        }
    }
    
    return (
        <div className="botonera">
            <button onClick={agregar}>+</button>
            <h3>{contador}</h3>
            <button onClick={quitar}>-</button>
        </div>
    )
}

export default ItemCount