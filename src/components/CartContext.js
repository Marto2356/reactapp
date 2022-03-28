import { createContext, useState } from "react";
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto, cantidad) => {
    const carritoAux = [...carrito];
    let cartProduct = {producto,cantidad}

    if(isInCart(producto)) {
      cartProduct = carrito.find(item => item.producto.id === producto.id)
      cartProduct = cartProduct.cantidad + cantidad
      carritoAux = [...carrito]
    }else{
      carritoAux.push({ producto, cantidad });
      setCarrito(carritoAux, ...carrito)
    }

    
  };
  
  const isInCart = (producto) => {
    if (carrito){
      carrito.some(item => item.producto.id === producto.id)
    }
  }
  
  const borrarDelCarrito = (id) => {
    const carritoAux = carrito.filter(elemento=>elemento.producto.id !==id);
    setCarrito(carritoAux)
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
