import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <h2 className="dashboard__title">Employee Dashboard</h2>
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="date-time">
            <span>
              <i className="fa fa-calendar"></i> 02 Jul 2024
            </span>
            <span>
              <i className="fa fa-clock"></i> 3:45:47
            </span>
            <span>Total Login Time</span>
          </div>
          <button className="clock-out-btn">Clock Out</button>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-item">
            <h3>Attendance</h3>
            <div className="attendance-info">
              <h1>3:45:47 Hrs</h1>
              <p>02 Jul 2024</p>
            </div>
          </div>
          <div className="dashboard-item">
            <h3>Leave Requests</h3>
            <ul className="leave-requests">
              <li>
                <div className="status-circle"></div>
                Application for sick leave <span>Accepted By HR</span>
              </li>
              <li>
                <div className="status-circle"></div>
                Request for casual leave <span>Accepted By HR</span>
              </li>
              <li>
                <div className="status-circle"></div>
                Request for casual leave <span>Accepted By HR</span>
              </li>
            </ul>
          </div>
          <div className="dashboard-item">
            <h3>Today's Time Tracker</h3>
            <p>Time Tracker not updated yet</p>
          </div>
          <div className="dashboard-item">
            <h3>Announcement</h3>
            {/* Add Announcement content here */}
          </div>
          <div className="dashboard-item">
            <h3>Upcoming Holidays</h3>
            {/* Add Upcoming Holidays content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
