import React from 'react';
import githubLogo from '../assets/github-mark.png';
import npmLogo from '../assets/npm-logo.png';
import '../../styles/styles.css'; // Adjust the path according to your project structure

const Footer = (): JSX.Element => {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <a
          href="https://github.com/oslabs-beta/flake-guard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubLogo}
            alt="GitHub logo"
            style={{width: '50px', height: '50px'}}
            id="github-logo"
          />
        </a>
        <a
          href="https://www.npmjs.com/package/flake-guard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={npmLogo}
            alt="Npm logo"
            style={{width: '70px', height: '70px'}}
            id="npm-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
