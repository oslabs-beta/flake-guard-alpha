import React from 'react';
import NavBarHeading from './nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginOrOut: React.FC = () => {
  //type = React.FuncitionalComponent
  return (
    <>
      <div className="App-header">
        <NavBarHeading />
      </div>
      <div>Login</div>
    </>
  );
};

export default LoginOrOut;
