import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/RAPID-X-LOGO-EXPORT.png';
import './Header.css'

function Header() {
  <script
  src="https://kit.fontawesome.com/97ab10d8c0.js"
  crossorigin="anonymous"
></script>
  return (
    <>
      <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' href="#"><img src={logo} alt="" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='header__icon' href="#home">icon</Nav.Link>
            <Nav.Link className='header__icon' href="#features"icon>icon</Nav.Link>
            <Nav.Link className='header__icon' href="#pricing">icon</Nav.Link>
            <Nav.Link className='header__icon' href="#pricing">icon</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;