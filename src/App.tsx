import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;