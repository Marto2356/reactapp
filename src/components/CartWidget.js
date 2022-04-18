import { useContext } from "react";
import {contexto} from "./CartContext" 

const CartWidget =() =>{
    
    const{calcularTotalItems}=useContext(contexto);
    
    return(
        <>
        {calcularTotalItems()>0 ?<div>
            <i className="fa-solid fa-cart-shopping cart">
                <div>{calcularTotalItems()}</div>
            </i>
        </div>:null}
        </>
)};

export default CartWidget;