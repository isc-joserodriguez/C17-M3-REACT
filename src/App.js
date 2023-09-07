import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { AuthContext } from './context/AuthContext';
import DashboardPage from './pages/DashboardPage';
import EditUserPage from './pages/EditUserPage';
import HomePage from './pages/HomePage';
import InfoUserPage from './pages/InfoUserPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import NewHeladoPage from './pages/NewHeladoPage';
import NewUserPage from './pages/NewUserPage';
import ProductListPage from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const { token, setMyToken, role, setMyRole } = useContext(AuthContext);

  useEffect(() => {
    setMyToken(localStorage.getItem('token'));
    setMyRole(localStorage.getItem('role'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            element={!token ? <HomePage /> : <ProductListPage />}
            path="/"
          />
          {token && <Route element={<ProductPage />} path="/:id" />}
          {!token && <Route element={<LoginPage />} path="/login" />}
          {!token && <Route element={<RegisterPage />} path="/register" />}
          {role === 'Administrador' && (
            <Route element={<DashboardPage />} path="/dashboard" />
          )}
          {role === 'Administrador' && (
            <Route element={<NewHeladoPage />} path="/nuevo-helado" />
          )}
          {role === 'Administrador' && (
            <Route element={<NewUserPage />} path="/nuevo-usuario" />
          )}
          {role === 'Administrador' && (
            <Route element={<EditUserPage />} path="/editar-usuario/:id" />
          )}
          {role === 'Administrador' && (
            <Route element={<InfoUserPage />} path="/info-usuario/:id" />
          )}
          {token && <Route element={<LogoutPage />} path="/logout" />}
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
