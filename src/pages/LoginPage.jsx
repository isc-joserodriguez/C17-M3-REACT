import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login } from "../services/auth";

const LoginPage = () => {
  const { setMyToken, setMyRole } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();


  const submitHandler = async (event) => {
    try{
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log(data);
      const resp = await login(data)
      setMyToken(resp.token);
      setMyRole(resp.info.rol);
      navigate('/');
    } catch(err){
      setErrorMessage('Error, intenta de nuevo')
    }
  };

    return <>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>
    <label>Email</label>
    <input name="correo" type="email" />
    <br />
    <label>Password</label>
    <input name="password" type="password" />
    <br />
    <label style={{color:'red', fontWeight:"bold"}}>{errorMessage}</label>
    <br />
    <button type="submit">
      Iniciar sesión
    </button>
  </form>
  </>
}

export default LoginPage;