// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserGraduate, FaFileAlt, FaCertificate, FaProjectDiagram } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
      <Link to="/login" className="sidebar-item" onClick={() => onItemClick('Login')}>
        <FaSignInAlt />
        <span>Login</span>
      </Link>

      <Link to="/studentinfo" className="sidebar-item" onClick={() => onItemClick('StudentInfo')}>
        <FaUserGraduate />
        <span>Student Info</span>
      </Link>

      <Link to="/resume" className="sidebar-item" onClick={() => onItemClick('Resume')}>
        <FaFileAlt />
        <span>Resume</span>
      </Link>

      <Link to="/certificates" className="sidebar-item" onClick={() => onItemClick('Certificates')}>
        <FaCertificate />
        <span>Certificates</span>
      </Link>

      <Link to="/project" className="sidebar-item" onClick={() => onItemClick('Project')}>
        <FaProjectDiagram />
        <span>Project</span>
      </Link>
    </div>
  );
};

export default Sidebar;
