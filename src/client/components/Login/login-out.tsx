import React from 'react';
import NavBarHeading from '../nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_login from '../../assets/bg_login.png';
import LoginButton from './LoginButton';
import '../../../styles/styles.css';

const LoginOrOut: React.FC = () => {
  return (
    <>
      <div className="App-header">
        <NavBarHeading />
      </div>
      <div className="login-container">
        <img src={bg_login} className="bg-image" alt="Background" />
        <div className="login-text">
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default LoginOrOut;
