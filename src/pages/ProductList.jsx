import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import DetalleProducto from '../components/DetalleProducto';
import { HeladoContext } from '../context/HeladoContext';

const ProductListPage = () => {
  const { helados } = useContext(HeladoContext);

  return (
      <Row md={3}>
        {helados.map((helado) => (
          <DetalleProducto key={helado._id} helado={helado} />
        ))}
      </Row>
  );
};

export default ProductListPage;

/* 
GET - /me 
Axios - middlewares - Si el token es inválido, cierro sesión.
*/