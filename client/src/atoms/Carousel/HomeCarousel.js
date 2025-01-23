import React, { useState, useEffect } from 'react';
import { HomeCarouselStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";

const images = [
  getImagePath("image1.png"),
  getImagePath("image2.png"),
  getImagePath("image3.png"),
  getImagePath("image4.png"),
  getImagePath("image5.png"),
  getImagePath("image6.png"),
  // getImagePath("image7.png"),
  // getImagePath("image8.png"),
  // getImagePath("image9.png"),
  
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  
  const totalImages = images.length; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []); 

  const displayedImages = [
    images[(currentIndex - 1 + totalImages) % totalImages], // Left inactive
    images[currentIndex], // Active
    images[(currentIndex + 1) % totalImages], // Right inactive
  ];

  return (
    <HomeCarouselStyle>
      <div className="slider">
        <button className='pbutton carouselbutton' onClick={prevSlide} aria-label="Previous slide">❮</button>        
        <div className="image-container">
          {displayedImages.map((image, index) => (           
            <img 
            key={index} 
            src={image} 
            alt={`Slide ${currentIndex + index - 1}`} 
            className={index === 0 ? 'active' : ''} // Add the active class to the center image
            onError={(e) => e.target.src = getImagePath("fallback")} 
          />
          ))}
        </div>        
        <button className='nbutton carouselbutton' onClick={nextSlide} aria-label="Next slide">❯</button>
      </div>
      <div className="pagination">
        {Array.from({ length: totalImages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index)} className={currentIndex === index ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </HomeCarouselStyle>
  );
};

export default HomeCarousel;
