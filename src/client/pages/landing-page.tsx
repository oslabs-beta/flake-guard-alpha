import React from 'react';
import '../../../src/styles/styles.css';
import npmLogo from '../assets/npm-logo.png';
import NavBarHeading from '../components/nav-bar';
  
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
      <footer></footer>{' '}
    </>
  );
};

export default Landing;
