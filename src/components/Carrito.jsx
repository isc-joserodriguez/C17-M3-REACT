import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';

const Carrito = ({ openCarrito, onHandleCloseCarrito }) => {
    const navigate = useNavigate()
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

    let total = 0;
    const resumen = Object.entries(productoObjeto).map(
      ([idProducto, productos]) => {
        total += productos.reduce(
          (accProduct, nextProduct) => accProduct + nextProduct.precio,
          0
        );
        return (
          <li key={idProducto}>
            {productos[0].nombre} - ${productos[0].precio}
            <Button
              size="sm"
              variant="danger"
              onClick={() => eliminarProductoCarrito(idProducto)}
            >
              <AiOutlineMinus />
            </Button>
            {productos.length}
            <Button
              size="sm"
              variant="success"
              onClick={() => agregarProductoCarrito(productos[0])}
            >
              <AiOutlinePlus />
            </Button>
          </li>
        );
      }
    );

    resumen.push(
      <li key="cualquiera" onClick={()=>{
        onHandleCloseCarrito();
        navigate('/checkout')}
        }>
        <Button>Pagar ${total}</Button>{' '}
      </li>
    );

    return resumen;
  };

  const mostrarCarrito = () => {
    if (carrito.length) {
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
        <ul>{mostrarCarrito()}</ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Carrito;
