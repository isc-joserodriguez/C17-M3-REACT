import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';

const Header = () => {
  const { carrito, eliminarProductoCarrito } = useContext(VentaContext);

const obtenerProductoObjeto = () =>{
  const productoObject = {};
  carrito.forEach(producto =>{
    if(productoObject[producto._id]){
      productoObject[producto._id].push(producto);
    }else{
      productoObject[producto._id] = [producto];
    }
  })

  return productoObject;
}
  const mapearCarrito = () => {

    {}
    return carrito.forEach(()=>{});
    /* 
    [
    {
        "_id": "64d4560f20a967da48a7280a",
        "nombre": "Helado",
        "sabor": "Pera",
        "precio": 20,
        "proveedor": {
            "_id": "64d451919ab04eb87b3653df",
            "nombre": "Mauricio",
            "telefono": "1223456788",
            "__v": 0
        },
        "__v": 0
    },
]
    */
  }

  const mostrarCarrito = () => {
    if(carrito.length){
      return mapearCarrito()
    }
    return <h5>Carrito vacío</h5>;
  }



  return (
    <ul>
      <li>
        <Link to="/">HomePage</Link>
      </li>
      <li>
        <Link to="/login">LoginPage</Link>
      </li>
      <li>
        <Link to="/register">RegisterPage</Link>
      </li>
      <li>
        <Link to="/checkout">CheckoutPage</Link>
      </li>
      <li>productos: {carrito.length}</li>
      
      <ul>
        {
          mostrarCarrito()
        }
      </ul>
    </ul>
  );
};

export default Header;
