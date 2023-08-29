import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdLogout, MdShoppingCart } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { VentaContext } from '../context/VentaContext';
import Carrito from './Carrito';

const Header = () => {
  const {token} = useContext(AuthContext);
  const navigate = useNavigate();
  const { carrito } = useContext(VentaContext);
  const [openCarrito, setOpenCarrito] = useState(false);

  const onHandleOpenCarrito = () => setOpenCarrito(true);
  const onHandleCloseCarrito = () => setOpenCarrito(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!token && <Nav.Link as={Link} to="/login">
                LoginPage
              </Nav.Link>}
              {!token && <Nav.Link as={Link} to="/register">
                RegisterPage
              </Nav.Link>}
              {token && <Nav.Link as={Link} to="/nuevo-helado">
                Agregar Helados
              </Nav.Link>}
              {token && <Nav.Item as={Button} onClick={onHandleOpenCarrito}>
                <MdShoppingCart /> {carrito.length}
              </Nav.Item>}
              {token && <Nav.Item as={Button} variant='danger' onClick={()=>navigate('/logout')}>
                <MdLogout /> 
              </Nav.Item>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carrito
        openCarrito={openCarrito}
        onHandleCloseCarrito={onHandleCloseCarrito}
      />
    </>
  );
};

export default Header;
