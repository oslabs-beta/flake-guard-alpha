import React from 'react';
import '../../../styles/styles.css';
import NavBarHeading from '../nav-bar';
// import GetStarted from './get-started';
import lightBulb from '../../assets/lightbulb.png';
import Carousel from './carousel';
import code_screen from '../../assets/code_2.png';
// import Footer from '../footer.js';
import earthbg from '../../assets/earth.png';
import npmLogo from '../../assets/npm-logo.png';
import {Link} from 'react-router-dom';

const Landing = (): JSX.Element => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <div
        className="intro-container intro-bg"
        style={{
          backgroundImage: `url(${earthbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div id="intro-title"></div> */}
        <h1 className="intro-bg-overlay">
          flake-guard <br />{' '}
          <em id="tagline-emphasize" className="fixed top-0">
            Stability starts here: Master Test Flakiness Ensure Reliability"
          </em>
          <br />
          {/* <div id="getstarted-container"> */}
          <button>
            <Link to="/docs">Get Started</Link>
          </button>
          <button>
            <Link to="https://www.npmjs.com/package/flake-guard">
              <img
                src={npmLogo}
                alt="npm logo"
                style={{width: '70px', height: '20px'}}
              />
            </Link>
          </button>
          {/* <GetStarted /> */}
          {/* </div> */}
        </h1>
      </div>
      <br />
      <Carousel />
      {/* <img src={code_image} style={{width: '100%'}}></img> */}
      <div
        className="intro-container intro-bg"
        style={{
          backgroundImage: `url(${code_screen})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="code-overlay">
          Stop wasting hours of time on Flaky tests!!
        </div>
      </div>
      <div
        className="intro-container intro-bg"
        style={{
          backgroundImage: `url(${lightBulb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="code-overlay">
          Stop wasting hours of time on Flaky tests!!
        </div>
      </div>
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
      {/* <footer><Footer /></footer> */}
    </>
  );
};

export default Landing;
