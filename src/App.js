import axios from 'axios';
import { useContext, useEffect } from 'react';
import Auth from './components/Auth';
import { AuthContext } from './context/AuthContext';

function App() {
  const { setMyToken, token } = useContext(AuthContext);
  //! Optimización: useMemo, useCallback, Lazy Loading,

  useEffect(() => {
    setMyToken(
      localStorage.getItem('token') ? localStorage.getItem('token') : null
    );
  }, []);

  useEffect(() => {
    if (token)
      axios
        .get('http://localhost:3002/v1/usuarios', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then((data) => console.log(data));
  }, [token]);

  return token ? 'Autenticado' : <Auth />;
}

export default App;
