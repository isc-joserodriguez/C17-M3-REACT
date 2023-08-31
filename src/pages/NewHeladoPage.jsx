import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { crearHelado } from "../services/helados";
import { getProveedores } from "../services/proveedores";

const NewHeladoPage = () => {
    const navigate = useNavigate();
    const [proveedores, setProveedores] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
      const init = async () => {
        setIsLoading(true);
        const proovedores = await getProveedores()
        setProveedores(proovedores)
        setIsLoading(false);
      }
      init();
    }, [])
    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
    
        if(await crearHelado(data)){
            navigate('/')
        }
      };
      
    return <>
    <h1>Nuevo helado</h1>{' '}
    {isLoading ?<Loader />:<form onSubmit={submitHandler}>
      <label >Nombre</label>
      <input name="nombre" type="text" />
      <br />
      <label>Sabor</label>
      <input name="sabor" type="text" />
      <br />
      <label>Precio</label>
      <input name="precio" type="number" />
      <br />
      <label>Proveedor</label>
      <select name="proveedor" >
        {proveedores.map((proveedor)=>(
          <option key={proveedor._id} value={proveedor._id}>{proveedor.nombre}</option>
          
        ))}
      </select>
      <br />
      <br />
      <button type="submit">Registrar</button>
    </form>}
  </>
}

export default NewHeladoPage;