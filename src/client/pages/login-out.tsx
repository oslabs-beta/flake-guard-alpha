import React from 'react';
import NavBarHeading from '../components/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginOrOut: React.FC = () => {
  //type = React.FuncitionalComponent
  return (
    <>
      <div className="App-header">
        <NavBarHeading />
      </div>
      <div id="login-test">Login</div>
    </>
  );
};

export default LoginOrOut;
