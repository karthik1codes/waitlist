import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({});
  const [slideWidths, setSlideWidths] = useState([]);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  // Get actual image dimensions when images load
  useEffect(() => {
    const updateDimensions = () => {
      const dimensions = {};
      const widths = [];
      
      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          const img = slide.querySelector('img');
          if (img && img.complete) {
            dimensions[index] = {
              width: img.naturalWidth,
              height: img.naturalHeight
            };
            widths[index] = slide.offsetWidth;
          }
        }
      });
      
      setImageDimensions(dimensions);
      setSlideWidths(widths);
    };

    // Wait a bit for images to render
    const timeout = setTimeout(updateDimensions, 100);
    
    // Also update on window resize
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [images]);

  // Calculate transform offset
  const getTransform = () => {
    if (slideWidths.length === 0) return 'translateX(0)';
    
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
      offset += (slideWidths[i] || 0) + 24; // 24px gap
    }
    return `translateX(-${offset}px)`;
  };

  return (
    <div className="image-carousel-auto" ref={containerRef}>
      <div 
        className="carousel-auto-container"
        style={{
          transform: getTransform()
        }}
      >
        {images.map((image, index) => {
          return (
            <div 
              key={index} 
              ref={el => slideRefs.current[index] = el}
              className="carousel-auto-slide"
            >
              <img 
                src={image.src} 
                alt={image.alt || `Slide ${index + 1}`}
                className="carousel-auto-image"
                loading="lazy"
                onLoad={(e) => {
                  const img = e.target;
                  if (!imageDimensions[index]) {
                    setImageDimensions(prev => ({
                      ...prev,
                      [index]: {
                        width: img.naturalWidth,
                        height: img.naturalHeight
                      }
                    }));
                    
                    // Update slide width after image loads
                    setTimeout(() => {
                      if (slideRefs.current[index]) {
                        const widths = [...slideWidths];
                        widths[index] = slideRefs.current[index].offsetWidth;
                        setSlideWidths(widths);
                      }
                    }, 50);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Dots indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

