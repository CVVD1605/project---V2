import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>Learn more about our mission and vision to make a difference.</p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/privacy" className="text-dark">Privacy Policy</a></li>
              <li><a href="/terms" className="text-dark">Terms of Service</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>Contact</h5>
            <p>Email: info@mywebsite.com</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
