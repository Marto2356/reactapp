import { createContext, useState } from "react";
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  // const [total, setTotal] = useState(0)

  const borrarDelCarrito = (id) => {};

  const agregarAlCarrito = (producto, cantidad) => {
    const carritoAux = [...carrito];

    carritoAux.push({ producto: producto, cantidad: cantidad });
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
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;
