import { createContext, useState } from 'react';

export const VentaContext = createContext();

const { Provider } = VentaContext;

export const VentaProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([
    {
      _id: '64d4560f20a967da48a7280a',
      nombre: 'Helado',
      sabor: 'Pera',
      precio: 20,
    },
    {
      _id: '64d4560f20a967da48a7280a',
      nombre: 'Helado',
      sabor: 'Pera',
      precio: 20,
    },
    {
      _id: '64d4560f20a967da48a7280a',
      nombre: 'Helado',
      sabor: 'Pera',
      precio: 20,
    },
  ]);

  const agregarProductoCarrito = (producto) =>
    setCarrito([...carrito, producto]);

  const eliminarProductoCarrito = (idProducto) => {
    const oldCarrito = [...carrito];
    const updatedCarrito = oldCarrito.filter(
      (producto) => producto._id !== idProducto
    );
    setCarrito(updatedCarrito);
  };

  return (
    <Provider
      value={{ carrito, agregarProductoCarrito, eliminarProductoCarrito }}
    >
      {children}
    </Provider>
  );
};
