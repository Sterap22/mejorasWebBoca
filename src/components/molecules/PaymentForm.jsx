import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pago procesado');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <InputField 
        label="Nombre en la tarjeta" 
        placeholder="Juan Pérez" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField 
        label="Número de tarjeta" 
        type="text" 
        placeholder="1234 5678 9101 1121" 
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <InputField 
        label="Fecha de expiración" 
        type="text" 
        placeholder="MM/AA" 
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <InputField 
        label="CVV" 
        type="text" 
        placeholder="123" 
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <Button type="submit">Pagar</Button>
    </form>
  );
};

export default PaymentForm;
