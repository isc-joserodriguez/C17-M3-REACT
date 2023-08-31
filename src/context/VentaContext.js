import { createContext, useEffect, useState } from 'react';

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
      if (!oldCarrito.length) {
        localStorage.setItem('[]');
      }
      return oldCarrito.sort((a, b) => a._id > b._id);
    });
  };

  const obtenerProductoObjeto = () => {
    const productoObject = {};
    carrito.forEach((producto) => {
      if (productoObject[producto._id]) {
        productoObject[producto._id].push(producto);
      } else {
        productoObject[producto._id] = [producto];
      }
    });
    return productoObject;
  };

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem('carrito')) || []);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('carrito')) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito]);

  return (
    <Provider
      value={{
        carrito,
        agregarProductoCarrito,
        eliminarProductoCarrito,
        obtenerProductoObjeto,
      }}
    >
      {children}
    </Provider>
  );
};
