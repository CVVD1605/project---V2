import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Our Platform</h3>
          <p>Making a difference one step at a time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Volunteer With Us</h3>
          <p>Join hands to help those in need.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
