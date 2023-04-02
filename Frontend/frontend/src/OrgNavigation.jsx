import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
//import '//Navigation.css'

function OrgNavigation() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">International Mini Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="color-nav" variant="light">
            <Nav.Link href="#home">About</Nav.Link>
          </Nav>
          <Nav className="color-nav" variant="light">
            <Nav.Link href="#home">About</Nav.Link>
          </Nav>
          
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="http://localhost:3000/" onClick={setLoggedIn(false)}>Logout</Nav.Link>
            </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OrgNavigation;