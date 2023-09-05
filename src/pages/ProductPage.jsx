import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DetalleProducto from '../components/DetalleProducto';
import Loader from '../components/Loader/Loader';
import { HeladoContext } from '../context/HeladoContext';

const ProductPage = () => {
  const { helados, isLoading } = useContext(HeladoContext);
  const { id } = useParams();
  const helado = helados.find((helado) => helado._id === id);
  const section = helado ? <DetalleProducto helado={helado} detalle/> :  <Navigate to = "/" />
  return (
      isLoading ? <Loader /> : section /* Sólo por si el usuario agrega la ruta por la URL */
  );
};

export default ProductPage;
