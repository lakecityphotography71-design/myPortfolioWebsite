import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
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