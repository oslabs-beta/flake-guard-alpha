import React from 'react';
import '../../../styles/styles.css';
import Header from '../nav-bar';
import Advantages from './Advantages';
import nasa from '../../assets/nasa.png';
import Carousel from './carousel';
import npmLogo from '../../assets/npm-logo.png';
import download from '../../assets/download.png'
import Footer from '../footer';
import {Link} from 'react-router-dom';
import '../../../styles/landingPage.css';

const Landing = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="landing-page-container">
        <div className="left-landing">
          <h1>Save Thousands of Debugging Hours</h1>
          <div className="left-landing-text">
            <p>
              Flake-Guard is a free, open-source tool that allows developers to
              run Jest tests to automatically detect, report, and manage flaky
              tests in software development.
            </p>
            <p>
              By identifying and handling these inconsistent tests, Flake-Guard
              helps maintain test reliability.
            </p>
            <button className="npm-button">
              <Link to="https://www.npmjs.com/package/flake-guard" >
                <span className="npm-link">Install npm package </span>
                <img src={download} alt="download-icon" style={{width:'18px', marginLeft:'10px'}} />
              </Link>
            </button>
            <p className='p-tag-with-link' style={{fontSize:'16px'}}>
              To learn more about FlakeGuard, click{' '}
              <a href="https://medium.com/">here</a>.
            </p>
          </div>
        </div>
      </div>
      <Advantages />
      <Footer />
    </>
    // <>
    //   <header>
    //     <NavBarHeading />
    //   </header>
    //   {/* <div
    //     className="lightBulb-container intro-bg"
    //     style={{
    //       backgroundImage: `url(${lightBulb})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //     }}
    //   >
    //     <div className="code-overlay">
    //       Stop wasting hours of time on Flaky tests!!
    //     </div>
    //   </div> */}
    //   <div
    //     className="intro-container intro-bg"
    //     style={{
    //       backgroundImage: `url(${nasa})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //     }}
    //   >
    //     <h1 className="intro-bg-overlay">
    //       flake-guard <br />
    //       <br />
    //       <button style={{margin: '20px'}} id="get-started">
    //         <Link to="/docs">Docs</Link>
    //       </button>
    //       <button id="npm-button">
    //         <Link to="https://www.npmjs.com/package/flake-guard">
    //           <img
    //             src={npmLogo}
    //             alt="npm lo go"
    //             style={{width: '70px', height: '20px'}}
    //           />
    //         </Link>
    //       </button>
    //     </h1>
    //   </div>
    //   {/* <Carousel />*/}

    //   <div className="codeScreen-container intro-bg">
    //     <div className="code-overlay">
    //       <em id="tagline-emphasize" className="fixed top-0">
    //         Stability starts here: <br /> Master Test Flakiness Ensure
    //         Reliability
    //       </em>
    //       <Carousel />
    //     </div>
    //   </div>

    //   <Footer />
    // </>
  );
};

export default Landing;
