import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from '../components/DetalleProducto';
import { HeladoContext } from '../context/HeladoContext';

const ProductPage = () => {
  const { helados, isLoading } = useContext(HeladoContext);
  const { id } = useParams();
  const helado = helados.find((helado) => helado._id === id);
  // TODO: resolver bug
  return (
    <ul>
      {!isLoading && <DetalleProducto helado={helado} detalle/>}
    </ul>
  );
};

export default ProductPage;
