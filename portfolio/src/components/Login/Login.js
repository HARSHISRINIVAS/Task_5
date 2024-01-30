import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
// ... rest of the code

const Login = () => {
  // State for email and roll number
  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');

  // Handle changes in the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle changes in the roll number input
  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any registration logic here
    console.log('Email:', email);
    console.log('Roll No:', rollNo);

    // You can send the data to a backend server for registration, validation, etc.
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Roll Number:
          <input type="text" value={rollNo} onChange={handleRollNoChange} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
