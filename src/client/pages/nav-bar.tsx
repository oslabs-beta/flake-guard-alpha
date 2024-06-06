import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {Link} from 'react-router-dom';

//bootstrap template
//type React Functional Componenet
const NavBarHeading: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand>
          <Link to="/home">Flake-Guard</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/analytics">Analytics</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <Link to="/profile">Profile</Link>
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/login">Login / Logout</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarHeading;
