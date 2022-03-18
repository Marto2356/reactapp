import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import Carrito from './Carrito'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/generos/:generos" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </>
    )
}

export default Main