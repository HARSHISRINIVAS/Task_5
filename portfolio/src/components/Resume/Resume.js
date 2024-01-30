import React, { useState } from 'react';
import './Resume.css'; // Import the CSS file
// ... rest of the code

const Resume = () => {
  // State for resume information
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  // Handle changes in the input fields
  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic with the resume information here
    console.log('Resume Information:', {
      name,
      rollNo,
      resumeFile,
    });

    // You can send the data to a backend server or perform any other actions.
  };

  return (
    <div>
      <h2>Resume Page</h2>
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
          Upload Resume:
          <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileUpload} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Resume;
