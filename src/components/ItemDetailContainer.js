import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import productosBack from '../assets/productos'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
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

    return  <div className="ItemDetailContainer">
                <ItemDetail producto={producto}/>
            </div>;
};

export default ItemDetailContainer;
