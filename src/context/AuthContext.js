import { createContext, useState } from 'react';

export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [role, setRole] = useState(null);

  const setMyToken = (token) => setToken(token);
  const setMyUser = (user) => setUser(user);
  const setMyRole = (role) => setRole(role);

  const clearToken = () => {
    setToken('');
    setMyRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <Provider
      value={{
        token,
        setMyToken,
        clearToken,
        user,
        setMyUser,
        role,
        setMyRole,
      }}
    >
      {children}
    </Provider>
  );
};
