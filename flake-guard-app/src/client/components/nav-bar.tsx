import React, {useEffect, useState} from 'react';
import {supabaseClient} from '../supabaseClient';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginButton from './Login/LoginButton';
import '../../styles/header.css';

const NavBarHeading: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const {data, error} = await supabaseClient.auth.getUser();
        if (data && !error) {
          setUserId(data.user.id);
        }
      } catch (error) {
        console.error('Error checking user auth: ', error);
      }
    };
    isLoggedIn();
  }, []);

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
        <a href="https://medium.com/@ashleyhannigan88/01431eb6ede3" target="_blank" rel="noopener noreferrer">Blog</a>
        {userId && <Link to={`/dashboard/user/${userId}`}>Dashboard</Link>}
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavBarHeading;
