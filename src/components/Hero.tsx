import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg',
    './assets/image4.jpg',
    './assets/image5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Photography ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
