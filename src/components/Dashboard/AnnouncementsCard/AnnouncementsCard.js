import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const AnnouncementsCard = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Announcement</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Leave Update <span className="float-right">2024-06-24</span></ListGroup.Item>
          <ListGroup.Item>Leave Update <span className="float-right">2024-06-12</span></ListGroup.Item>
          <ListGroup.Item>Leave Update <span className="float-right">2024-06-11</span></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default AnnouncementsCard;
