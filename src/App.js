import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthContext } from './context/AuthContext';
import EstadisticasPage from './pages/EstadisticasPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import NewHeladoPage from './pages/NewHeladoPage';
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
            <Route element={<EstadisticasPage />} path="/estadisticas" />
          )}
          {role === 'Administrador' && (
            <Route element={<NewHeladoPage />} path="/nuevo-helado" />
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
