import React from 'react';
import PaymentForm from '../molecules/PaymentForm';

const PaymentPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Página de Pago</h1>
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentPage;
