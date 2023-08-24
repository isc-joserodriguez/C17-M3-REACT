import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';

const DetalleProducto = ({ helado, detalle }) => {
  const { agregarProductoCarrito } = useContext(VentaContext);
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg"
      />
      <Card.Body>
        <Card.Title>
          {helado.nombre} - {helado.precio}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {<Button variant="primary" onClick={() => navigate(`/${detalle ? '' : helado._id}`)}>
          {detalle ? 'Regresar al listado': 'Ver producto'}
        </Button>}
        
        <Button
          variant="success"
          onClick={() => agregarProductoCarrito(helado)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DetalleProducto;
