import React from 'react';

const Button = ({ type = 'button', children, onClick = {} }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
