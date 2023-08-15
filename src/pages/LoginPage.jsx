import React from "react";
import { login } from "../services/auth";

const LoginPage = ({setToken}) => {

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const resp = await login(data)

    console.log(resp)

    setToken(resp.token);
  };

    return <form onSubmit={submitHandler}>
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
}

export default LoginPage;