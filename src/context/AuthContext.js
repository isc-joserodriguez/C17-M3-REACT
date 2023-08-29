import { createContext, useState } from 'react';

export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const setMyToken = (token) => setToken(token);
  const setMyUser = (user) => setUser(user);

  const clearToken = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Provider value={{ token, setMyToken, clearToken, user, setMyUser }}>
      {children}
    </Provider>
  );
};
