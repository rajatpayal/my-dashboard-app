import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUser, faCalendar, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

const Sidebar = ({ isOpen, setActiveComponent }) => {

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
        {isOpen && <h3>106. Sachin kamboj</h3>}
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleMenuItemClick("Dashboard")}>
          <FontAwesomeIcon icon={faHome} />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Attendance")}>
          <FontAwesomeIcon icon={faClock} />
          {isOpen && <span>Attendance</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Time Tracker")}>
          <FontAwesomeIcon icon={faClock} />
          {isOpen && <span>Time Tracker</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Leave")}>
          <FontAwesomeIcon icon={faUser} />
          {isOpen && <span>Leave</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Holidays")}>
          <FontAwesomeIcon icon={faCalendar} />
          {isOpen && <span>Holidays</span>}
        </li>
        <li onClick={() => handleMenuItemClick("ChangePassword")}>
          <FontAwesomeIcon icon={faKey} />
          {isOpen && <span>Change Password</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Logout")}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          {isOpen && <span>Log Out</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
