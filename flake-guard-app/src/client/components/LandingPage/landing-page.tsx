import React from 'react';
// import '../../../styles/styles.css';
// import NavBarHeading from '../nav-bar';
import logo from '../../assets/logo.png';
import Header from '../nav-bar';
import Advantages from './Advantages';
import download from '../../assets/download.png';
import Footer from '../footer';
import {Link} from 'react-router-dom';
import graphs from '../../assets/graphs.png'
import '../../../styles/landingPage.css';
import MeetTheTeam from './MeetTheTeam';

const Landing = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="landing-page-container">
        <div className="left-landing">
          <h1>Save Thousands of Debugging Hours</h1>
          <div className="left-landing-text">
            <p>
              Flake Guard is a free, open-source, software that allows developers to automatically run Jest testing files to detect, report, and manage flaky tests in development.
            </p>
            <p>
              By identifying and handling these inconsistent tests, Flake Guard
              helps maintain test reliability.
            </p>
            <button className="npm-button">
              <Link to="https://www.npmjs.com/package/flake-guard">
                <span className="npm-link">Install npm package </span>
                <img
                  src={download}
                  alt="download-icon"
                  style={{width: '18px', marginLeft: '10px'}}
                />
              </Link>
            </button>
            <p className="p-tag-with-link" style={{fontSize: '16px'}}>
              To learn more about FlakeGuard, click{' '}
              <a href="https://medium.com/@ashleyhannigan88/01431eb6ede3" target="_blank" rel="noopener noreferrer"

                style={{textDecoration: 'underline'}}
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="right-landing">
        <img src={graphs} alt="graphs-landing" style={{width:'750px', marginLeft: '15px'}}/>
        </div>
      </div>
      <div style={{textAlign: 'center', color:'white'}}>
        <p style={{textAlign: 'center', color:'white'}}>PLACEHOLDER FOR INSTRUCTIONS OF HOW TO INSTALL FG</p>
      </div>
      <Advantages />
      <div id="meet-the-team-landing-div">
        <MeetTheTeam />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
