import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import productosBack from '../assets/productos'
import ItemCount from "./ItemCount"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = (props) => {
    const [producto, setProducto] = useState({})

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productosBack.find((item)=>{
                    return item.id.toString() === id;
                }));
            }, 2000);
        }).then((data) => {
        setProducto(data);
        });
    });

    return  <div>
                <ItemDetail producto={producto}/>

                <ItemCount className="botonera" inicial={1} stock={10}/>
            </div>;
};

export default ItemDetailContainer;
