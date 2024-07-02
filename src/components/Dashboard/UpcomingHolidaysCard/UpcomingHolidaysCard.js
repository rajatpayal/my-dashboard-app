import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './UpcomingHolidaysCard.css'

const UpcomingHolidaysCard = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Upcoming Holidays</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Independence Day <br/><small>Start Date : 2024-08-15 End Date : 2024-08-15</small></ListGroup.Item>
          <ListGroup.Item>Raksha Bandhan <br/><small>Start Date : 2024-08-19 End Date : 2024-08-19</small></ListGroup.Item>
          <ListGroup.Item>Janmashtami <br/><small>Start Date : 2024-08-22 End Date : 2024-08-22</small></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UpcomingHolidaysCard;
