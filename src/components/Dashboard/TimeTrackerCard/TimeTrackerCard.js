import React from 'react';
import { Card } from 'react-bootstrap';

const TimeTrackerCard = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Today's Time Tracker</Card.Title>
        <p>Time Tracker not updated yet</p>
      </Card.Body>
    </Card>
  );
};

export default TimeTrackerCard;
