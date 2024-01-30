import React, { useState } from 'react';
import './Project.css'; // Import the CSS file
// ... rest of the code

const Project = () => {
  // State for project information
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [zipFile, setZipFile] = useState(null);

  // Handle changes in the input fieldss
  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setZipFile(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic with the project information here
    console.log('Project Information:', {
      name,
      rollNo,
      zipFile,
    });

    // You can send the data to a backend server or perform any other actions.
  };

  return (
    <div>
      <h2>Project Page</h2>
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
          Upload Zip File:
          <input type="file" accept=".zip" onChange={handleFileUpload} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Project;
