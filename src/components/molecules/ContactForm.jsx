import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado.');
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
      <InputField label="Name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Phone" type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Budget</label>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white"
        >
          <option value="">Select your budget</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-5000">$1000 - $5000</option>
        </select>
      </div>
      <InputField label="Additional Info" type="textarea" placeholder="Additional Information" value={info} onChange={(e) => setInfo(e.target.value)} />
      <div className="text-center">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
