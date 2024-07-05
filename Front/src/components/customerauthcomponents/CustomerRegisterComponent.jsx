// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import "../../css/customerauthcss/customerregister.css";

// eslint-disable-next-line react/prop-types
const CustomerRegisterComponent = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/signup', formData);
      console.log(response.data);
      // Handle successful registration (e.g., show a message, redirect to login, etc.)
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="customer-register-component flex-col">
      <div className="crc-heading flex">
        <h1>REGISTER</h1>
      </div>
      <form className="crc-inputs flex-col" onSubmit={handleSubmit}>
        <div className="crc-input-div flex-col-left">
          <label>Full Name</label>
          <input 
            type="text" 
            name="full_name" 
            placeholder="Full Name" 
            value={formData.full_name} 
            onChange={handleChange} 
          />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirm_password" 
            placeholder="Confirm Password" 
            value={formData.confirm_password} 
            onChange={handleChange} 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="crc-buttons flex">
          <button type="submit">Register</button>
        </div>
      </form>
      <span className="crc-sign-section">
        I have an account <span className="crc-sign-in-action" onClick={onToggle}>Sign In</span>
      </span>
    </div>
  );
};

export default CustomerRegisterComponent;
