<<<<<<< Updated upstream
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AttendanceCard from './AttendenceCard/AttendanceCard';
import LeaveRequestsCard from './LeaveRequestsCard/LeaveRequestsCard';
import TimeTrackerCard from './TimeTrackerCard/TimeTrackerCard';
import AnnouncementsCard from './AnnouncementsCard/AnnouncementsCard';
import UpcomingHolidaysCard from './UpcomingHolidaysCard/UpcomingHolidaysCard';

const Dashboard = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={4}><AttendanceCard /></Col>
        <Col md={4}><LeaveRequestsCard /></Col>
        <Col md={4}><TimeTrackerCard /></Col>
      </Row>
      <Row>
        <Col md={6}><AnnouncementsCard /></Col>
        <Col md={6}><UpcomingHolidaysCard /></Col>
      </Row>
    </Container>
=======
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
>>>>>>> Stashed changes
  );
};

export default Dashboard;
