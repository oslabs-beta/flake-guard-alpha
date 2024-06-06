import React from 'react';
import NavBarHeading from './nav-bar';
import '../../../src/styles.css';

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <NavBarHeading />
      </div>
      <div>Landing info</div>
      <div id="login-test">Login</div>
    </>
  );
};

export default Landing;
