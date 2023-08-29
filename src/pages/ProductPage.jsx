import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from '../components/DetalleProducto';
import Loader from '../components/Loader/Loader';
import { HeladoContext } from '../context/HeladoContext';

const ProductPage = () => {
  const { helados, isLoading } = useContext(HeladoContext);
  const { id } = useParams();
  const helado = helados.find((helado) => helado._id === id);
  // TODO: resolver bug
  return (
      isLoading ? <Loader /> : <DetalleProducto helado={helado} detalle/>
  );
};

export default ProductPage;
