import React, {useState} from 'react';
import '../../../styles/styles.css';
import NavBarHeading from '../nav-bar';
import Carousel from './carousel';
import logo from '../../assets/logo.png';
import Footer from '../footer';

const Landing = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <div id="dark-mode-container">
        <button onClick={handleClick} className="dark-mode-button">
          {isClicked ? 'Dark!!' : 'Light'}
        </button>
        <div className={isClicked ? 'box clicked' : 'box'}>
          This box changes style when the button is clicked.
        </div>
        <div className="main-container">
          <div className="intro-bg" style={{position: 'relative'}}>
            <img src={logo} alt="Logo" /> <br />
            <em id="tagline-emphasize">
              Master Test Flakiness, Ensure Reliability
            </em>
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

// import React, {useState} from 'react';
// import '../../../styles/styles.css';
// import NavBarHeading from '../nav-bar';
// import Carousel from './carousel';
// import logo from '../../assets/logo.png';
// import Footer from '../footer';
// // import {Link} from 'react-router-dom';

// const Landing = (): JSX.Element => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//     console.log(isClicked, 'isclicked state clicked')
//   };

//   return (
//     <>
//       <header>
//         <NavBarHeading />
//       </header>
//       <div id="dark-mode-container">
//         <button onClick={handleClick()}>Dark</button>
//       </div>
//       <div className="main-container">
//         <div className="intro-bg position:relative ">
//           <img src={logo} /> <br />
//           <em id="tagline-emphasize">
//             Master Test Flakiness, Ensure Reliability
//           </em>
//           <Carousel />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Landing;
