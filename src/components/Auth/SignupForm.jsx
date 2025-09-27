import React, { useState } from 'react';
import FormInput from './FormInput';
import {
  validateEmail,
  validatePasswordStrength,
  validatePhoneNumber,
  validateRequiredFields
} from '../../utils/validation';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateRequired(formData.name)) newErrors.name = 'Name is required';
    if (!validateEmail(formData.email) && !validatePhoneNumber(formData.phone)) {
      newErrors.contact = 'Either email or phone number is required';
    }
    if (!validatePasswordStrength(formData.password)) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful signup (e.g., call API)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.contact}
      />
      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.contact}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;