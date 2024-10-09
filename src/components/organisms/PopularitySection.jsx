import React from 'react';

const PopularityCard = ({ icon, count, title }) => (
  <div className="text-center">
    <div className="text-5xl text-blue-500 mb-2">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800">{count}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

const PopularitySection = () => {
  return (
    <section className="py-16 bg-white" id="popularity">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Popularity</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <PopularityCard icon="🌐" count="120+" title="Websites Created" />
        <PopularityCard icon="📱" count="80+" title="Apps Developed" />
        <PopularityCard icon="⭐" count="300+" title="Happy Clients" />
      </div>
    </section>
  );
};

export default PopularitySection;
