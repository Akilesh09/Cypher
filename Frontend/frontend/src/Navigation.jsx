import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function BasicExample() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">International Mini Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {loggedIn ?
            (<Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#home">Logout</Nav.Link>
            </Navbar.Collapse>) :
            (<Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#home">Login</Nav.Link>
            </Navbar.Collapse>)
          } 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;