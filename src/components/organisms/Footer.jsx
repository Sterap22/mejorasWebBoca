import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex justify-center space-x-8">
        <div>
          <p>Email: support@webboca.com</p>
        </div>
        <div>
          <p>Address: 8185 Via Ancho Rd Boca Raton, FL 33433</p>
        </div>
        <div>
          <p>Phone: (561) 235-2921</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#"><i className="fab fa-facebook text-blue-500"></i></a>
        <a href="#"><i className="fab fa-twitter text-blue-500"></i></a>
        <a href="#"><i className="fab fa-google text-blue-500"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
