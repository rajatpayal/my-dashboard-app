import React from 'react';
import './Navbar.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Moon, Maximize, Bell, User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/theme';

const NavbarComponent = ({ toggleSidebar, sidebarOpen }) => {
 
  const dispatch = useDispatch();

  const themeColor = useSelector((state) => state.theme.color);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <header className={`navbar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
     <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <span className="icon-wrapper"><Menu /></span>
      </button>
      <div className="navbar-content">
        <div className="navbar-left">
          <h1>Attendance</h1>
        </div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={handleToggleTheme}>
            <span className="icon-wrapper"><Moon /></span>
          </button>
          <button className="nav-btn">
            <span className="icon-wrapper"><Maximize /></span>
          </button>
          <button className="nav-btn">
            <span className="icon-wrapper"><Bell /></span>
          </button>
          <button className="nav-btn profile-btn">
            <span className="icon-wrapper"><User /></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
