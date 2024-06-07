import React from 'react';
import NavBarHeading from '../nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_login from '../../assets/bg_login.png';

const LoginOrOut: React.FC = () => {
  //type = React.FuncitionalComponent
  return (
    <>
      <div className="App-header">
        <NavBarHeading />
      </div>
      <div id="login-test"><img src={bg_login} style={{width: "100%"}}></img>Login</div>
    </>
  );
};

export default LoginOrOut;
