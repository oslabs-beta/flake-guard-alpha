import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginButton from './Login/LoginButton';
import '../../styles/header.css';

//created and imported images from canva as pngs
//bootstrap template
//type React Functional Componenet
const NavBarHeading: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/home">
          <img
            className="logo"
            src={logo}
            style={{height: '90px', width: '180px'}}
            alt="flakeguard-logo"
          />
        </Link>
        <Link to="/docs">Docs</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dashboard/user">Dashboard</Link>
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavBarHeading;
