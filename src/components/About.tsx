import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-stone-50 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-stone-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-slate-800 mb-8">
            Capturing Moments,
            <br />
            Creating Memories
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We are passionate storytellers who believe every moment deserves to be preserved 
            with artistry and elegance. Through our lens, we capture not just images, but 
            emotions, connections, and the authentic beauty of life's most precious moments.
          </p>
          
          <p className="font-inter text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
            With years of experience in photography, we specialize in creating timeless 
            visual narratives that you'll treasure forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;