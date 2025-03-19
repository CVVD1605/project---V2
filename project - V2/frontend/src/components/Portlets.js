import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Portlets = () => {
  const data = [
    { title: "Upcoming Events", text: "Check out our upcoming events.", link: "/events" },
    { title: "Latest News", text: "Stay updated with our latest news.", link: "/news" },
    { title: "Our Donors", text: "Meet the heroes supporting our mission.", link: "/donors" },
  ];

  return (
    <Container className="my-5">
      <Row>
        {data.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <a href={item.link} className="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portlets;
