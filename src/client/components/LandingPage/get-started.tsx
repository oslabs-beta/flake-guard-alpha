import React from 'react';
import npmLogo from '../../assets/npm-logo.png';
import earthLightsLogo from '../../assets/earth.png';
import { Link } from 'react-router-dom';
import '../../../styles/styles.css';

const GetStarted = (): JSX.Element => {
  return (
    <div style={{ backgroundImage: `url(${earthLightsLogo})`, backgroundSize: 'cover', width: '1000px', height: '100px', backgroundPosition: 'center' }}>
      <q id="tagline">
        Stability Starts Here:
        <em id="tagline-emphasize">Master Test Flakiness Ensure Reliability</em>
      </q>
      <button>
        <Link to="/docs">Get Started</Link>
      </button>
      <button>
        <Link to="https://www.npmjs.com/package/flake-guard">
          <img src={npmLogo} alt="npm logo" style={{ width: '70px', height: '20px' }} />
        </Link>
      </button>
    </div>
  );
};

export default GetStarted;
