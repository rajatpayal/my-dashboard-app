import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const LeaveRequestsCard = () => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Leave Requests</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Application for sick leave due to High fever <br/><small>Accepted By HR</small></ListGroup.Item>
          <ListGroup.Item>Request for casual leave to attend a family function <br/><small>Accepted By HR</small></ListGroup.Item>
          <ListGroup.Item>Request for casual leave due to some personal work <br/><small>Accepted By HR</small></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default LeaveRequestsCard;
