import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';

const Header = () => {
  const { carrito, eliminarProductoCarrito } = useContext(VentaContext);
  let produtosAMostrar = [];
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
      <li>productos: {carrito.length}</li>
      <ul>
        {carrito.map((producto) => (
          <li key={producto._id}>
            {producto.nombre}{' '}
            <button onClick={() => eliminarProductoCarrito(producto._id)}>
              eliminar
            </button>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default Header;
