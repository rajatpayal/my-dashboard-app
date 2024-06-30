import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-header">
      <h2>106. Sachin kamboj</h2>
      <p>Frontend Developer Web Developer</p>
    </div>
    <ul className="sidebar-menu">
      <li><a href="#dashboard">Dashboard</a></li>
      <li className="active"><a href="#attendance">Attendance</a></li>
      <li><a href="#time-tracker">Time Tracker</a></li>
      <li><a href="#leave">Leave</a></li>
      <li><a href="#holidays">Holidays</a></li>
      <li><a href="#change-password">Change Password</a></li>
      <li><a href="#logout">LogOut</a></li>
    </ul>
  </div>
  )
}

export default Sidebar;
