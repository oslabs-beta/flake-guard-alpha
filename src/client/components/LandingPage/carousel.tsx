import React, {useState} from 'react';
import npmLogo from '../../assets/npm-logo.png';

//Carousel type??
// interface carouselTexts {
//   string: string,
//   string: string,
//   string: string,
// }

// Array of carousel texts
const Carousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTexts = [
    'User Friendly UI with its own NPM package',
    'Easy installation process',
    'Simple Installation, recommended and utilized by Software Engineering teams',
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === carouselTexts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? carouselTexts.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div id="carousel-card" className="cards-container">
        <div id="carousel-overlay">
          {carouselTexts[currentIndex]}
          {currentIndex === 1 && (
            <img
              src={npmLogo}
              alt="npm logo"
              style={{width: '70px', height: '70px'}}
            />
          )}
        </div>
        <div id="carousel-container">
          <button id="carousel-prev" onClick={handlePrev}>
            Prev
          </button>
          <button id="carousel-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
