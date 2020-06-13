import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const OrgCard = (props) => (
  <Col lg={4} sm={6}>
    <Card
      style={{
        width: "18rem",
        justifyContent: "space-around",
        alignContent: "center",
        margin: "5vh",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </Col>
);

export default OrgCard;
