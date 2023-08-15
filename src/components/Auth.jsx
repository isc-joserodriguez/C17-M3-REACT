import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Auth = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      {!token && <LoginPage/>}
      {!token && <RegisterPage/>}
    </>
  );
};

export default Auth;
