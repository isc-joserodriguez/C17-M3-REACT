import { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { VentaContext } from '../context/VentaContext';

const Carrito = ({ openCarrito, onHandleCloseCarrito }) => {
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
    <Offcanvas show={openCarrito} onHide={onHandleCloseCarrito} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Detalle Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          <ul>{mostrarCarrito()}</ul>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Carrito;
