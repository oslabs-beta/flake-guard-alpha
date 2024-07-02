import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {Link, NavigateFunction, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginButton from './Login/LoginButton';

//created and imported images from canva as pngs
//bootstrap template
//type React Functional Componenet
const NavBarHeading: React.FC = () => {
  // const [activeLink, setActiveLink] = useState('home');
  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <img
        src={logo}
        style={{height: '90px', width: '180px'}}
        alt="flakeguard-logo"
      />
      <Link to="/docs">Docs</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dashboard">Dashboard</Link>
      <LoginButton />

    </div>

    // <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
    //   <Container id="navbar-container">
    //     <Navbar.Brand>
    //       <Link to="/home">
    //         <img
    //           id="flake-logo"
    //           src={logo}
    //           style={{height: '90px', width: '180px'}}
    //         ></img>
    //       </Link>
    //     </Navbar.Brand>
    //     <Navbar.Brand onClick={() => navigate('/docs')}>Docs</Navbar.Brand>
    //     <Navbar.Brand onClick={() => navigate('/medium.com')}>Blog</Navbar.Brand>
    //     <Link to="/medium-blog">Dashboard</Link>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav">
    //       {' '}
    //       <span className="navbar-toggle"></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {/* <Nav.Link href="#home">Home</Nav.Link> */}
    //         <NavDropdown title="Dashboard" id="basic-nav-dropdown">
    //           {/* <NavDropdown.Item>
    //             <Link to="/profile">Profile</Link>
    //           </NavDropdown.Item> */}
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item>
    //             <Link to="/dashboard">Dashboard</Link>
    //           </NavDropdown.Item>
    //           <NavDropdown.Item>
    //             <Link to="/login">Login / Logout</Link>
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <span className="navbar-text">
    //         <div className="social-icon">
    //           <a href="">
    //             {/**code below commented out is for social media logos (github for example) */}
    //             {/* <img alt="" id="social-logo"></img> */}
    //           </a>
    //         </div>
    //       </span>
    //     </Navbar.Collapse>
    //     <LoginButton />
    //   </Container>
    // </Navbar>
  );
};

export default NavBarHeading;
