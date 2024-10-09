import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 text-center">
        <div>
          <p>Email: support@webboca.com</p>
        </div>
        <div>
          <p>Address: 8185 Via Ancho Rd, Boca Raton, FL 33433</p>
        </div>
        <div>
          <p>Phone: (561) 235-2921</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-blue-400 transition-colors">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter" className="text-blue-500 hover:text-blue-400 transition-colors">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Google" className="text-blue-500 hover:text-blue-400 transition-colors">
          <i className="fab fa-google"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
