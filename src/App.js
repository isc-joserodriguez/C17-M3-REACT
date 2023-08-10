import axios from 'axios';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const clickHandler = async () => {
    try {
      const {
        data: { data },
      } = await axios.post('http://localhost:3002/v1/auth/login', {
        correo: email,
        password,
      });
      console.log(data);

      setToken(data.token);
      localStorage.setItem('token', data.token);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {token}
      <label>Email</label>
      <input type="email" value={email} onChange={onChangeEmail} />
      <br />
      <label>Password</label>
      <input type="password" value={password} onChange={onChangePassword} />
      <br />
      <button type="button" onClick={clickHandler}>
        Iniciar sesión
      </button>
    </>
  );
}

export default App;
