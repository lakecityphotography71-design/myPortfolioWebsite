import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-slate-800" />
            <span className="font-playfair text-2xl font-bold text-slate-800">
              LakeCityPhotography
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={label}
                onClick={() => scrollToSection(id)}
                className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-inter font-medium"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;