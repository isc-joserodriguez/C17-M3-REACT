import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthContext } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import NewHeladoPage from './pages/NewHeladoPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const { setMyToken } = useContext(AuthContext);

  useEffect(() => {
    setMyToken(
      localStorage.getItem('token') ? localStorage.getItem('token') : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProductPage />} path="/:id" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<NewHeladoPage />} path="/nuevo-helado" />
          <Route element={<LogoutPage />} path="/logout" />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
