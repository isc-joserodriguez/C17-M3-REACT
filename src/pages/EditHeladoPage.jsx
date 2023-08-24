import { useNavigate } from "react-router-dom";
import { crearHelado } from "../services/helados";

const EditHeladoPage = () => {
    const navigate = useNavigate();
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
    <form onSubmit={submitHandler}>
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
      <input name="proveedor" type="text" />
      <br />
      <br />
      <button type="submit">Registrar</button>
    </form>
  </>
}

export default EditHeladoPage;