import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { register } from '../services/auth';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setMyToken } = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    if(data.password !== data.confirmPassword){
      alert('Contraseñas no coinciden')
      return;
    }

    const resp = await register(data);

    console.log(resp);

    setMyToken(resp.token);
    navigate('/');
  };

  return (
    <>
      <h1>Register</h1>{' '}
      <form onSubmit={submitHandler}>
        <label htmlFor="nombreInput">Nombre</label>
        <input id="nombreInput" name="nombre" type="text" />
        <br />
        <label>Apellido</label>
        <input name="apellido" type="text" />
        <br />
        <label>Edad</label>
        <input name="edad" type="number" />
        <br />
        <label>Correo</label>
        <input name="correo" type="email" />
        <br />
        <label>Password</label>
        <input name="password" type="password" />
        <br />
        <label>Confirma Password</label>
        <input name="confirmPassword" type="password" />
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default RegisterPage;
