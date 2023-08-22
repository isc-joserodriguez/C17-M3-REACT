import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeladoContext } from '../context/HeladoContext';
import { VentaContext } from "../context/VentaContext";
import { obtenerTodosHelados } from "../services/helados";

const HomePage = () => {
  const { setMyHelados, helados } = useContext(HeladoContext);
  const { agregarProductoCarrito } = useContext(VentaContext);

  useEffect(()=>{
    console.log('hola', process.env);

    const getHelados = async () => {
      const resp = await obtenerTodosHelados()
      if(resp){
        setMyHelados(resp);
      }
    }
    getHelados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return <ul>
      {helados.map((helado)=><li key={helado._id}>
        {helado.nombre}
        <Link to={`/${helado._id}`}>Ver producto</Link>
        <button onClick={()=>agregarProductoCarrito(helado)} >Agregar al carrito</button>
        </li>)}
    </ul>
  };
  
  export default HomePage;
  