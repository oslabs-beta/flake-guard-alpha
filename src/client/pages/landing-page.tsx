import React from 'react';
import '../../styles/styles.css';
import NavBarHeading from '../components/nav-bar';
import GetStarted from '../components/LandingPage/get-started';
import lightBulb from '../assets/lightbulb.png';
import Carousel from '../components/landing-carousel';
import code_image from '../assets/code_2.png';

const Landing: React.FC = () => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <div className="intro-container">
        <h1 id="intro-title">flake-guard</h1>
        <br />
        <GetStarted />
      </div>
      <br />
      <Carousel />
      <img src={code_image}></img>
      <section>
        <img src={lightBulb}></img>
      </section>
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
