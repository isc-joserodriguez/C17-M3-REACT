import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';

const Header = () => {
  const { carrito, eliminarProductoCarrito, agregarProductoCarrito } =
    useContext(VentaContext);

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
  const mapearCarrito = () => {
    const productoObjeto = obtenerProductoObjeto();

    return Object.entries(productoObjeto).map(([idProducto, productos]) => (
      <li key={idProducto}>
        {productos[0].nombre}
        <button onClick={() => eliminarProductoCarrito(idProducto)}>-</button>
        {productos.length}
        <button onClick={() => agregarProductoCarrito(productos[0])}>+</button>
      </li>
    ));
  };

  const mostrarCarrito = () => {
    if (carrito.length) {
      console.log(mapearCarrito());
      return mapearCarrito();
    }
    return <h5>Carrito vacío</h5>;
  };

  return (
    <ul>
      <li>
        <Link to="/">HomePage</Link>
      </li>
      <li>
        <Link to="/login">LoginPage</Link>
      </li>
      <li>
        <Link to="/register">RegisterPage</Link>
      </li>
      <li>
        <Link to="/checkout">CheckoutPage</Link>
      </li>
      <li>
        <Link to="/nuevo-helado">Agregar Helados</Link>
      </li>
      <li>productos: {carrito.length}</li>

      <ul>{mostrarCarrito()}</ul>
    </ul>
  );
};

export default Header;
