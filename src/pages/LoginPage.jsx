import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login } from "../services/auth";

const LoginPage = () => {
  const { setMyToken } = useContext(AuthContext);


  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const resp = await login(data)

    console.log(resp)

    setMyToken(resp.token);
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
    <button type="submit">
      Iniciar sesión
    </button>
  </form>
  </>
}

export default LoginPage;