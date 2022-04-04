import React, {useEffect,useState} from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {db} from './Firebase'
import {getDocs, collection, addDoc, query, where} from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])

    const {id}=useParams();

    useEffect(() => {

        if(!id){
            const libroCollection = collection(db,"libros")
            const documentos = getDocs(libroCollection)
    
            documentos
            .then(respuesta => {
            const libros = respuesta.docs.map(doc => {
                    const libro = doc.data()
                    return libro
                })
                setListaProductos(libros)
            })
        } else {
            const libroCollection = collection(db,"libros")
            const miFiltro = query(libroCollection,where("generos","==",id))
            const documentos = getDocs(miFiltro)

            documentos
            .then(respuesta => {
            const libros = respuesta.docs.map(doc => {
                    const libro = doc.data()
                    return libro
                })
                setListaProductos(libros)
            })
        }
    },[id]);

    return (
        <div className="ItemListContainer">
            <ItemList lista={listaProductos}/>
        </div>
    )
}

export default ItemListContainer