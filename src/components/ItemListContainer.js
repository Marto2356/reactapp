import React, {useEffect,useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productosBack from '../assets/productos'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])

    const {generos}=useParams();

    useEffect(() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    generos?
                    productosBack.filter((item) => 
                    item.generos===generos
                ):productosBack);
            },2000);
        }).then((productos) => {
            setListaProductos(productos);
        });
    },[generos]);

    return (
        <div>
            <ItemList lista={listaProductos}/>
        </div>
    )
}

export default ItemListContainer