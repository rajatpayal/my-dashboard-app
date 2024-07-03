import React from "react";
import { Home,Calendar, Lock, LogOut,FileText } from 'react-feather';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../utils/auth";


const Sidebar = ({ isOpen, setActiveComponent }) => {

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
        <div>{isOpen && <span className="user-descripition">106. Rajat</span>}</div>
        <div>{isOpen && <span className="user-descripition">Frontend Developer</span>}</div>

        
        
      </div>

      <ul className="sidebar-menu">
        <li onClick={() => handleMenuItemClick("Dashboard")}>
          <Home />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Attendance")}>
          <Calendar />
          {isOpen && <span>Attendance</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Time Tracker")}>
          <FileText/>
          {isOpen && <span>Time Tracker</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Leave")}>
          <FontAwesomeIcon icon={faUserTimes} />
          {isOpen && <span>Leave</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Holidays")}>
          <Calendar />
          {isOpen && <span>Holidays</span>}
        </li>
        <li onClick={() => handleMenuItemClick("ChangePassword")}>
          <Lock />
          {isOpen && <span>Change Password</span>}
        </li>
        <li onClick={logout}>
          <LogOut />
          {isOpen && <span>Log Out</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
