import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import {db} from './Firebase'
import {collection, where, query, getDocs} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const {id} = useParams();

    useEffect(() => {

        const libroCollection = collection(db,"libros")
        const miFiltro = query(libroCollection,where("id","==",Number(id)))
        const documentos = getDocs(miFiltro)

        documentos
        .then(respuesta => {
        const libros = respuesta.docs.map(doc => {
                const libro = doc.data()
                return libro
            })
            setProducto(libros)
        })
    },[id]);

    return  <div className="ItemDetailContainer">
                <ItemDetail producto={producto}/>
            </div>;
};

export default ItemDetailContainer;
