import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the current input field when it changes
    setErrors({ ...errors, [name]: '' });
    // Clear the success message when input changes
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setErrors({}); // Clear all errors
      onSubmit(formData); // Pass the entire form data to the parent component
      setSuccessMessage('Form submitted successfully!'); // Display success message
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (data.firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    if (data.lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
    if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation (you can use a library for more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};

export default Form;
