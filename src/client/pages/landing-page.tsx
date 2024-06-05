import React from 'react';
import NavBarHeading from './nav-bar';
import '../../../src/styles.css';
import npmLogo from '../assets/npm-logo.png';
// import logo_1 from '../assets/logo_1.png';

const Landing: React.FC = () => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <q id="tagline">
        Stability Starts Here:
        <em id="tagline-emphasize">Master Test Flakiness Ensure Reliability</em>
      </q>
      <div className="intro-container">
        <h1 id="intro-title">flake-guard</h1>
      </div>
      <br />
      <div id="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <section className="cards-container">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Flake-guard feature 1</h5>
                    <p className="card-text">Explanation & benefit.</p>
                    <a href="#" className="btn btn-primary">
                      Go to URL
                    </a>
                  </div>
                </div>
              </section>
              <img
                src=""
                id="feature-1-logo"
                // className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <section className="cards-container">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Flake-guard feature 2 </h5>
                    <p className="card-text">Explanation & benefit.</p>
                    <a href="#" className="btn btn-primary">
                      Go to URL
                    </a>
                  </div>
                </div>
              </section>
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <section className="cards-container">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Flake-guard feature 3</h5>
                    <p className="card-text">Explanation & benefit.</p>
                    <a href="#" className="btn btn-primary">
                      Go to URL
                    </a>
                  </div>
                </div>
              </section>
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />

      <div id="login-test">Login</div>
      <div className="registry-link">
        <a href="https://www.npmjs.com/package/flake-guard">
          <img src={npmLogo} alt="npm logo" id="social-logo" />
        </a>
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
        <footer></footer>
      </div>
    </>
  );
};

export default Landing;
