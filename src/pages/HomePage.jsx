import { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import DetalleProducto from "../components/DetalleProducto";
import { HeladoContext } from '../context/HeladoContext';
import { obtenerTodosHelados } from "../services/helados";

const HomePage = () => {
  const { setMyHelados, helados } = useContext(HeladoContext);

  useEffect(()=>{
    const getHelados = async () => {
      const resp = await obtenerTodosHelados()
      if(resp){
        setMyHelados(resp);
      }
    }
    getHelados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return <Row md={3} >
    {helados.map((helado)=><DetalleProducto key={helado._id} helado={helado}/>)}
    </Row> 
  };
  
  export default HomePage;
  