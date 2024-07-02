import React from 'react';
import { Card } from 'react-bootstrap';

const AttendanceCard = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Attendance</Card.Title>
        <h2>0:00:00 Hrs</h2>
        <p>30 Jun 2024</p>
      </Card.Body>
    </Card>
  );
};

export default AttendanceCard;
