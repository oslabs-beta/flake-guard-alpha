import {Link} from 'react-router-dom';
import github from '../../assets/github-mark-white.png';
import npm from '../../assets/npm.png';

import '../../styles/footer.css';

const Footer = (): JSX.Element => {
  return (
    <div className="footer-container">
      <div className="footer-icon-links">
        <a
          href="https://github.com/oslabs-beta/flake-guard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github-logo" style={{width: '35px'}} />
        </a>
        <a
          href="https://www.npmjs.com/package/flake-guard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={npm} alt="npm-logo" style={{width: '45px'}}/>
        </a>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <a href="https://medium.com/@ashleyhannigan88/01431eb6ede3" target="_blank" rel="noopener noreferrer">Blog</a>     
        <Link to="/ourTeam">Our Team</Link>
      </div>
    </div>
  );
};

export default Footer;
