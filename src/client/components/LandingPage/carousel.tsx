import React from 'react';
import npmLogo from '../../assets/npm-logo.png';

const Carousel: React.FC = () => {
  return (
    <div id="carousel">
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
                    <h5 className="card-title">NPM Package</h5>
                    <p className="card-text">
                      Easy to utilize npm package{' '}
                    </p>{' '}
                    <div className="registry-link">
                      <a href="https://www.npmjs.com/package/flake-guard">
                        <img src={npmLogo} alt="npm logo" id="social-logo" />
                      </a>
                    </div>
                    <a
                      href="https://www.npmjs.com/package/flake-guard"
                      className="btn btn-primary"
                    >
                      NPM Registry
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
    </div>
  );
};

export default Carousel;
