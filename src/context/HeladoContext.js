import { createContext, useContext, useEffect, useState } from 'react';
import { obtenerTodosHelados } from '../services/helados';
import { AuthContext } from './AuthContext';

export const HeladoContext = createContext();

const { Provider } = HeladoContext;

export const HeladoProvider = ({ children }) => {
  const [helados, setHelados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getHelados = async () => {
      setIsLoading(true);
      const resp = await obtenerTodosHelados();
      if (resp) {
        setHelados(resp);
      }
      setIsLoading(false);
    };
    getHelados();
  }, [token]);

  return <Provider value={{ helados, isLoading }}>{children}</Provider>;
};
