import React from 'react';
import NavBarHeading from './nav-bar';
import '../../../src/styles.css';
import npmLogo from '../assets/npm-logo.png';

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <NavBarHeading />
      </div>
      <div>
        <q>tagline</q> <br />
        <section>
          {' '}
          Downloading Instructions
          <p> npm https://www.npmjs.com/package/flake-guard</p>
          <code> CLI npm i flake-guard</code>
          <p> GitHub github.com/oslabs-beta/flake-guard</p>
        </section>
      </div>
      <div className="registry-link">
        <a href="https://www.npmjs.com/package/flake-guard">
          <img src={npmLogo} alt="npm logo" id="social-logo"></img>
        </a>
      </div>
      <br />
      <div id="login-test">Login</div>
    </>
  );
};

export default Landing;
