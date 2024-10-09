import React from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';

const HeroSection = () => {
  
  const handleScrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section bg-gray-100 h-screen flex flex-col items-center justify-center">
      <Logo />
      <h1 className="text-5xl font-bold mt-6 text-center">
        We Can't <span className="text-blue-500">Wait To Start</span> Working With You
      </h1>
      <nav className="mt-6">
        <ul className="flex space-x-6">
          <li><a href="#contact-form" className="text-gray-700 hover:text-blue-500">Websites</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-blue-500">Apps</a></li>
          <li><a href="#popularity" className="text-gray-700 hover:text-blue-500">Popularity</a></li>
          <li><a href="#contact-us" className="text-gray-700 hover:text-blue-500">Contact Us</a></li>
        </ul>
      </nav>
      <div className="mt-10">
        <Button onClick={handleScrollToForm} className="animate-bounce">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;