import React from "react";
<<<<<<< Updated upstream
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUser, faCalendar, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";
=======
import { Home, Calendar, Lock, LogOut, FileText } from "react-feather";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
>>>>>>> Stashed changes

const Sidebar = ({ isOpen, setActiveComponent }) => {
  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
<<<<<<< Updated upstream
        {isOpen && <h3>106. Sachin kamboj</h3>}
=======
        <div>
          {isOpen && (
            <span className="user-descripition">106. Sachin kamboj</span>
          )}
        </div>
        <div>
          {isOpen && (
            <span className="user-descripition">Frontend Developer</span>
          )}
        </div>
>>>>>>> Stashed changes
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleMenuItemClick("Dashboard")}>
<<<<<<< Updated upstream
          <FontAwesomeIcon icon={faHome} />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Attendance")}>
          <FontAwesomeIcon icon={faClock} />
          {isOpen && <span>Attendance</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Time Tracker")}>
          <FontAwesomeIcon icon={faClock} />
=======
          <FontAwesomeIcon icon={Home} />
          <Home />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Attendance")}>
          <FontAwesomeIcon icon={Calendar} />
          <Calendar />
          {isOpen && <span>Attendance</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Time Tracker")}>
          <FontAwesomeIcon icon={FileText} />
          <FileText />
>>>>>>> Stashed changes
          {isOpen && <span>Time Tracker</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Leave")}>
          <FontAwesomeIcon icon={faUser} />
          {isOpen && <span>Leave</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Holidays")}>
<<<<<<< Updated upstream
          <FontAwesomeIcon icon={faCalendar} />
          {isOpen && <span>Holidays</span>}
        </li>
        <li onClick={() => handleMenuItemClick("ChangePassword")}>
          <FontAwesomeIcon icon={faKey} />
          {isOpen && <span>Change Password</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Logout")}>
          <FontAwesomeIcon icon={faSignOutAlt} />
=======
          <FontAwesomeIcon icon={Calendar} />
          <Calendar />
          {isOpen && <span>Holidays</span>}
        </li>
        <li onClick={() => handleMenuItemClick("ChangePassword")}>
          <FontAwesomeIcon icon={Lock} />
          <Lock />
          {isOpen && <span>Change Password</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Logout")}>
          <FontAwesomeIcon icon={LogOut} />
          <LogOut />
>>>>>>> Stashed changes
          {isOpen && <span>Log Out</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
