import { createContext, useEffect, useState } from 'react';
import { obtenerTodosHelados } from '../services/helados';

export const HeladoContext = createContext();

const { Provider } = HeladoContext;

export const HeladoProvider = ({ children }) => {
  const [helados, setHelados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  return <Provider value={{ helados, isLoading }}>{children}</Provider>;
};
