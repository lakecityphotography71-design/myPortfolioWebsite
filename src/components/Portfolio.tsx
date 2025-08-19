import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1',
    'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&dpr=1',
    'https://images.pexels.com/photos/1845288/pexels-photo-1845288.jpeg?auto=compress&cs=tinysrgb&w=700&h=1000&dpr=1',
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
    'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1556901/pexels-photo-1556901.jpeg?auto=compress&cs=tinysrgb&w=700&h=1000&dpr=1',
    'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&dpr=1',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=700&h=1000&dpr=1',
  ];

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 to-stone-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Portfolio
          </h2>
          <p className="font-inter text-lg text-slate-600 max-w-2xl mx-auto">
            A curated collection of our finest work, showcasing the beauty 
            and emotion we capture through our lens.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid cursor-pointer group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Portfolio"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;