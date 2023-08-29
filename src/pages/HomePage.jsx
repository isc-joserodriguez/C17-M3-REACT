import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import DetalleProducto from '../components/DetalleProducto';
import { HeladoContext } from '../context/HeladoContext';

const HomePage = () => {
  const { helados } = useContext(HeladoContext);

  return (
    <Container>
      <Row md={3}>
        {helados.map((helado) => (
          <DetalleProducto key={helado._id} helado={helado} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
