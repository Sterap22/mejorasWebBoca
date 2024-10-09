import React from 'react';
import ContactForm from '../molecules/ContactForm';

const ContactInfo = ({ icon, title, details }) => (
  <div className="text-center mb-8">
    <div className="text-3xl text-blue-500 mb-2">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{details}</p>
  </div>
);

const ContactUsSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="contact-us">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        <div>
          <ContactInfo icon="📧" title="Email" details="support@webboca.com" />
          <ContactInfo icon="📍" title="Address" details="8185 Via Ancho Rd, Boca Raton, FL" />
          <ContactInfo icon="📞" title="Phone" details="(561) 235-2921" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
