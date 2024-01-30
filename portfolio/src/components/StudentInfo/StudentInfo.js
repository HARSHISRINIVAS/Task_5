import React, { useState } from 'react';
import './StudentInfo.css'; // Import the CSS file
// ... rest of the code


const StudentInfo = () => {
  // State for student information
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dob, setDob] = useState('');
  const [college, setCollege] = useState('');
  const [backlogs, setBacklogs] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [internshipsDone, setInternshipsDone] = useState(0);
  const [certificatesDone, setCertificatesDone] = useState(0);

  // Handle changes in the input fields
  const handleInputChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic with the student information here
    console.log('Student Information:', {
      name,
      rollNo,
      year,
      email,
      contactNumber,
      dob,
      college,
      backlogs,
      projectsDone,
      internshipsDone,
      certificatesDone,
    });

    // You can send the data to a backend server or perform any other actions.
  };

  return (
    <div>
      <h2>Student Information Page</h2>
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
          Year:
          <input type="text" value={year} onChange={(e) => handleInputChange(e, setYear)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => handleInputChange(e, setContactNumber)}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" value={dob} onChange={(e) => handleInputChange(e, setDob)} required />
        </label>
        <br />
        <label>
          College:
          <input type="text" value={college} onChange={(e) => handleInputChange(e, setCollege)} required />
        </label>
        <br />
        <label>
          No. of Backlogs:
          <input
            type="number"
            value={backlogs}
            onChange={(e) => handleInputChange(e, setBacklogs)}
            min="0"
            required
          />
        </label>
        <br />
        <label>
          No. of Projects Done:
          <input
            type="number"
            value={projectsDone}
            onChange={(e) => handleInputChange(e, setProjectsDone)}
            min="0"
            required
          />
        </label>
        <br />
        <label>
          No. of Internships Done:
          <input
            type="number"
            value={internshipsDone}
            onChange={(e) => handleInputChange(e, setInternshipsDone)}
            min="0"
            required
          />
        </label>
        <br />
        <label>
          No. of Certificates Done:
          <input
            type="number"
            value={certificatesDone}
            onChange={(e) => handleInputChange(e, setCertificatesDone)}
            min="0"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentInfo;
