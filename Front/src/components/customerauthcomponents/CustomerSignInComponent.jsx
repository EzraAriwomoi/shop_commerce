// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import "../../css/customerauthcss/customersignin.css";

// eslint-disable-next-line react/prop-types
const CustomerSignInComponent = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('http://127.0.0.1:5000/auth/signin', formData);
      console.log(response.data); // Assuming response contains token or user data upon successful login

      // Example: If successful, you might set authentication state and redirect
      // For simplicity, assuming a successful login will redirect to homepage
      // You may want to manage token storage and authentication state in a more secure manner

      // Example redirection (you can replace this with your logic)
      window.location.href = '/'; // Redirect to homepage after successful login

    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="customer-sign-in-component flex-col">
      <div className="csc-heading flex">
        <h1>SIGN IN</h1>
      </div>
      <form className="csc-inputs flex-col" onSubmit={handleSubmit}>
        <div className="csc-input-div flex-col-left">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter email"
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="csc-input-div flex-col-left">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <a className="forgot-password flex">Forgot Password?</a>
        {error && <p className="error-message">{error}</p>}
        <div className="csc-buttons flex">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="register-section">
        <span>Don&apos;t have an account?{" "}</span>
        <span className="register-action" onClick={onToggle}>
          Register
        </span>
      </div>
    </div>
  );
};

export default CustomerSignInComponent;
