import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HeladoContext } from '../context/HeladoContext';
import { VentaContext } from '../context/VentaContext';

const ProductPage = () => {
  const { agregarProductoCarrito } = useContext(VentaContext);
  const { helados } = useContext(HeladoContext);
  const { id } = useParams();
  const helado = helados.find((helado) => helado._id === id);
  // TODO: resolver bug
  return (
    <ul>
      {JSON.stringify(helado)}
      <button onClick={() => agregarProductoCarrito(helado)}>
        Agregar al carrito
      </button>
    </ul>
  );
};

export default ProductPage;
