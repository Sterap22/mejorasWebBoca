import React from 'react';
import HeroSection from './components/organisms/HeroSection';
import ContactForm from './components/molecules/ContactForm';
import Footer from './components/organisms/Footer';
import './App.css'
import ServicesSection from './components/organisms/ServicesSection';
import PopularitySection from './components/organisms/PopularitySection';
import ContactUsSection from './components/organisms/ContactUsSection';

function App() {
  return (
    <div>
      <HeroSection />
      <ContactForm />
      <ServicesSection />
      <PopularitySection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
