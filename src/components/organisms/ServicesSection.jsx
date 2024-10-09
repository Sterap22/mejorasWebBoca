import React from 'react';
import Button from '../atoms/Button';

const ServiceCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button className="bg-blue-500 hover:bg-blue-600">Learn More</Button>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <ServiceCard
          title="Websites"
          description="Custom website design to boost your business's online presence."
        />
        <ServiceCard
          title="Apps"
          description="Developing mobile applications that engage and delight users."
        />
        <ServiceCard
          title="Consulting"
          description="Professional consulting to help you succeed in digital transformation."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
