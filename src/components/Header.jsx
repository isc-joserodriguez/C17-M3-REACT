import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { VentaContext } from '../context/VentaContext';
import Carrito from './Carrito';

const Header = () => {
  const { carrito } = useContext(VentaContext);
  const [openCarrito, setOpenCarrito] = useState(false);

  const onHandleOpenCarrito = () => setOpenCarrito(true);
  const onHandleCloseCarrito = () => setOpenCarrito(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                LoginPage
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                RegisterPage
              </Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                CheckoutPage
              </Nav.Link>
              <Nav.Link as={Link} to="/nuevo-helado">
                Agregar Helados
              </Nav.Link>
              <Nav.Item as={Button} onClick={onHandleOpenCarrito}>
                <MdShoppingCart /> {carrito.length}
              </Nav.Item>
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
