import React from 'react';
import './Navbar.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faExpand, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className={`navbar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="navbar-content">
        <div className="navbar-left">
          <h1>Attendance</h1>
        </div>
        <div className="navbar-right">
          <button className="nav-btn">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faExpand} />
          </button>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="nav-btn profile-btn">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
