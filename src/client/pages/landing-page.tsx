import React from 'react';
import NavBarHeading from './nav-bar';
import '../../../src/styles.css';
import npmLogo from '../assets/npm-logo.png';
// import logo_1 from '../assets/logo_1.png';
import Carousel from '../components/landing-carousel';

const Landing: React.FC = () => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <q id="tagline">
        Stability Starts Here:
        <em id="tagline-emphasize">Master Test Flakiness Ensure Reliability</em>
      </q>
      <div className="intro-container">
        <h1 id="intro-title">flake-guard</h1>
      </div>
      <br />
      <Carousel />
      <div id="login-test">Login</div>
      <div className="registry-link">
        <a href="https://www.npmjs.com/package/flake-guard">
          <img src={npmLogo} alt="npm logo" id="social-logo" />
        </a>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          Insert documentation page info here as a scrolling option but for the
          landing page but also a direct link with the endpoint or header
        </p>
        <footer></footer>
      </div>
    </>
  );
};

export default Landing;
