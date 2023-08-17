import { createContext, useState } from 'react';

export const HeladoContext = createContext();

const { Provider } = HeladoContext;

export const HeladoProvider = ({ children }) => {
  const [helados, setHelados] = useState([]);

  const setMyHelados = (helados) => setHelados(helados);

  return <Provider value={{ helados, setMyHelados }}>{children}</Provider>;
};
