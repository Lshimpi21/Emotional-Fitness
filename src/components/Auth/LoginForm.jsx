import React, { useState } from 'react';
import {
  validateEmail,
  validatePasswordStrength,
  validatePhoneNumber,
  validateRequiredFields
} from '../../utils/validation';
import './form.css';

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!emailOrPhone) {
      validationErrors.emailOrPhone = 'Email or Phone number is required';
    } else if (!validateEmail(emailOrPhone) && !validatePhone(emailOrPhone)) {
      validationErrors.emailOrPhone = 'Invalid Email or Phone number';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      validationErrors.password = 'Password must be at least 6 characters long and contain a number';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful login (e.g., call login API)
      console.log('Logging in with:', { emailOrPhone, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label htmlFor="emailOrPhone">Email or Phone:</label>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        {errors.emailOrPhone && <span className="error">{errors.emailOrPhone}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;