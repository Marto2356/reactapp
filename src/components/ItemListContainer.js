import React, {useEffect,useState} from 'react'
import ItemList from './ItemList'
import productosBack from '../assets/productos'
import {useParams} from 'react-router-dom'
import {db} from './Firebase'
import {getDocs, collection} from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])

    const {generos}=useParams();

    useEffect(() => {

        const libroCollection = collection(db,"libros")
        const documentos = getDocs(libroCollection)
        
        documentos
            .then((respuesta) =>{
                const aux = []

                respuesta.forEach((documento) => {
                    const libro = {
                        id: documento.id,
                        ...documento.data()
                    }
                    aux.push(libro)
                })

                setListaProductos(aux)
            })
        
        // const promise = new Promise ((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(
        //             generos?
        //             productosBack.filter((item) => 
        //             item.generos===generos
        //         ):productosBack);
        //     },2000);
        // }).then((productos) => {
        //     setListaProductos(productos);
        // });
    },[generos]);

    return (
        <div className="ItemListContainer">
            <ItemList lista={listaProductos}/>
        </div>
    )
}

export default ItemListContainer