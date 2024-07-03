import React from "react";
import { Home, Calendar, Lock, LogOut, FileText } from "react-feather";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, setActiveComponent }) => {
  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
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
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleMenuItemClick("Dashboard")}>
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
          {isOpen && <span>Time Tracker</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Leave")}>
          <FontAwesomeIcon icon={faUser} />
          {isOpen && <span>Leave</span>}
        </li>
        <li onClick={() => handleMenuItemClick("Holidays")}>
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
          {isOpen && <span>Log Out</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
