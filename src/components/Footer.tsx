import React from 'react';
import { Camera, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Camera className="w-6 h-6" />
            <span className="font-playfair text-xl font-bold">LakeCityPhotography</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/lakecity_photography"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="font-inter text-slate-400">
            © 2024 LakeCityPhotography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;