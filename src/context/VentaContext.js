import { createContext, useState } from 'react';

export const VentaContext = createContext();

const { Provider } = VentaContext;

export const VentaProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProductoCarrito = (producto) =>
    setCarrito([...carrito, producto].sort((a, b) => a._id > b._id));

  const eliminarProductoCarrito = (idProducto) => {
    /* const oldCarrito = [...carrito];
    const indexElement = oldCarrito.findIndex(
      (producto) => producto._id === idProducto
    );
    oldCarrito.splice(indexElement, 1);
    setCarrito(oldCarrito); */

    setCarrito((oldState) => {
      const oldCarrito = [...oldState];
      const indexElement = oldCarrito.findIndex(
        (producto) => producto._id === idProducto
      );
      console.log(indexElement);
      oldCarrito.splice(indexElement, 1);
      return oldCarrito.sort((a, b) => a._id > b._id);
    });
  };

  return (
    <Provider
      value={{ carrito, agregarProductoCarrito, eliminarProductoCarrito }}
    >
      {children}
    </Provider>
  );
};
