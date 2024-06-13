import React from 'react';
import '../../../styles/styles.css';
import NavBarHeading from '../nav-bar';
import nasa from '../../assets/nasa.png';
import Carousel from './carousel';
// import codeScreen from '../../assets/code_2.png';
// import flakeLogo from '../../assets/logo_3.png';
import npmLogo from '../../assets/npm-logo.png';
import Footer from '../footer';
import {Link} from 'react-router-dom';

const Landing = (): JSX.Element => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      {/* <div
        className="lightBulb-container intro-bg"
        style={{
          backgroundImage: `url(${lightBulb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="code-overlay">
          Stop wasting hours of time on Flaky tests!!
        </div>
      </div> */}
      <div
        className="intro-container intro-bg"
        style={{
          backgroundImage: `url(${nasa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="intro-bg-overlay">
          flake-guard <br />
          <br />
          <button style={{margin: '20px'}}>
            <Link to="/docs">Get Started</Link>
          </button>
          <button>
            <Link to="https://www.npmjs.com/package/flake-guard">
              <img
                src={npmLogo}
                alt="npm lo go"
                style={{width: '70px', height: '20px'}}
              />
            </Link>
          </button>
        </h1>
      </div>
      {/* <Carousel />*/}

      <div className="codeScreen-container intro-bg">
        <div className="code-overlay">
          <em id="tagline-emphasize" className="fixed top-0">
            Stability starts here: <br /> Master Test Flakiness Ensure
            Reliability
          </em>
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
