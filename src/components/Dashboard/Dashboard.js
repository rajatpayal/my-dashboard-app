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
  );
};

export default Dashboard;
