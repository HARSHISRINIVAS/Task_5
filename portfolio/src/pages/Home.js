// // Home.js
// import React, { useState } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar/Sidebar';
// import Login from '../components/Login/Login';
// import StudentInfo from '../components/StudentInfo/StudentInfo';
// import Resume from '../components/Resume/Resume';
// import Certificates from '../components/Certificates/Certificates';
// import Project from '../components/Project/Project';

// const Home = () => {
//   const [selectedItem, setSelectedItem] = useState('');
//   const navigate = useNavigate();

//   const handleSidebarItemClick = (item) => {
//     setSelectedItem(item);
//     navigate(`/${item.toLowerCase()}`);
//   };

//   return (
//     <div className="home-container">
//       <Sidebar onItemClick={handleSidebarItemClick} />
//       <div className="content-container">
//         <Routes>
//           <Route path="/" element={<HomeContent />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/studentinfo" element={<StudentInfo />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/certificates" element={<Certificates />} />
//           <Route path="/project" element={<Project />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const HomeContent = () => {
//   return (
//     <div>
//       <h2>Welcome to the Home Page</h2>
//       {/* Add any content specific to the Home page */}
//     </div>
//   );
// };

// export default Home;


// Home.js
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Login from '../components/Login/Login';
import StudentInfo from '../components/StudentInfo/StudentInfo';
import Resume from '../components/Resume/Resume';
import Certificates from '../components/Certificates/Certificates';
import Project from '../components/Project/Project';
import './Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <div className="home-container">
      <Sidebar onItemClick={handleSidebarItemClick} />
      <div className="main-content">
        <h1>Portfolio</h1>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/studentinfo" element={<StudentInfo />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <footer>
          {/* Add footer details here */}
        </footer>
      </div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div>
      {/* Add any content specific to the Home page */}
    </div>
  );
};

export default Home;
