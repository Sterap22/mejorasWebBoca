import React from 'react';
import HeroSection from './components/organisms/HeroSection';
import ContactForm from './components/molecules/ContactForm';
import Footer from './components/organisms/Footer';
import './App.css'

function App() {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center my-8">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
