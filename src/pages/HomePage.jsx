import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeladoContext } from '../context/HeladoContext';
import { obtenerTodosHelados } from "../services/helados";

const HomePage = () => {
  const { setMyHelados, helados } = useContext(HeladoContext);

  useEffect(()=>{
    const getHelados = async () => {
      const resp = await obtenerTodosHelados()
      console.log(resp)
      setMyHelados(resp);
    }
    getHelados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return <ul>
      {helados.map((helado)=><li key={helado._id}>
        {helado.nombre}
        <Link to={`/${helado._id}`}>Ver producto</Link>
        </li>)}
    </ul>
  };
  
  export default HomePage;
  