import { createContext, useState } from "react";
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto, cantidad) => {
    let cartProduct = {producto,cantidad}

    let carritoAux = []
    if(isInCart(producto)) {
      cartProduct = carrito.find(item => item.producto.id === producto.id)
      cartProduct.cantidad = cartProduct.cantidad + cantidad
      carritoAux = [...carrito]
    }else{
      carritoAux = [cartProduct, ...carrito]
    }
    return setCarrito(carritoAux)
  };
  
  const isInCart = (producto) => {
    return carrito && carrito.some(item => item.producto.id === producto.id)
  }
  
  const borrarDelCarrito = (producto) => {
    if(isInCart(producto)) {
      const carritoAux = carrito.filter(item=>item.producto !== producto);
      setCarrito(carritoAux)
    }
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };


  const valorDelContexto = {
    borrarDelCarrito,
    limpiarCarrito,
    carrito,
    agregarAlCarrito,
    isInCart
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;
