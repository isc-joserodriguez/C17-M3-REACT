import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { VentaContext } from '../context/VentaContext';
import ButtonsPayPal from './ButtonsPayPal';

const Carrito = ({ openCarrito, onHandleCloseCarrito }) => {
  const {
    carrito,
    eliminarProductoCarrito,
    agregarProductoCarrito,
    obtenerProductoObjeto,
  } = useContext(VentaContext);

  const mapearCarrito = () => {
    const productoObjeto = obtenerProductoObjeto();
    return Object.entries(productoObjeto).map(([idProducto, productos]) => (
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
    ));
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
        <ButtonsPayPal
          amount={carrito.reduce((acc, next) => acc + next.precio, 0)}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Carrito;
