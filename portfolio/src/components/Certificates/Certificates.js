import React, { useState } from 'react';
import './Certificates.css'; 


const Certificates = () => {
  // State for certificate information
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);

  // Handle changes in the input fields
  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setCertificateFile(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic with the certificate information here
    console.log('Certificate Information:', {
      name,
      rollNo,
      certificateFile,
    });

    // You can send the data to a backend server or perform any other actions.
  };

  return (
    <div>
      <h2>Certificates</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => handleInputChange(e, setName)} required />
        </label>
        <br />
        <label>
          Roll Number:
          <input type="text" value={rollNo} onChange={(e) => handleInputChange(e, setRollNo)} required />
        </label>
        <br />
        <label>
          Upload Certificate:
          <input type="file" accept=".pdf, .jpg, .png" onChange={handleFileUpload} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Certificates;
