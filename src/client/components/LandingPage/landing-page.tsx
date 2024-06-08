import React from 'react';
import '../../../styles/styles.css';
import NavBarHeading from '../nav-bar';
import lightBulb from '../../assets/lightbulb.png';
import Carousel from './carousel';
import codeScreen from '../../assets/code_2.png';
import earthbg from '../../assets/earth.png';
import npmLogo from '../../assets/npm-logo.png';
import Footer from '../footer';
import {Link} from 'react-router-dom';
// import Footer from '../footer.js';
// import GetStarted from './get-started';

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
        <h1 className="intro-bg-overlay">
          flake-guard <br />
          <em id="tagline-emphasize" className="fixed top-0">
            Stability starts here: Master Test Flakiness Ensure Reliability
          </em>
          <br />
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
        </h1>
      </div>
      <br />
      <Carousel />
      <div
        className="intro-container intro-bg"
        style={{
          backgroundImage: `url(${codeScreen})`,
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
      <Footer />
    </>
  );
};

export default Landing;
