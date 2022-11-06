import React from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../images/hero-img1.png";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Temporibus sit repellat delectus nemo ad id ea deserunt
                facere <br />
                omnis consectetur harum qui praesentium libero dignissimos
                eligendi <br /> nihil, aperiam magnam sed?
              </p>
            </div>

            <div className="search">
              <input type="text" placeholder="Search..." />
              <button className="btn">Search</button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="heroImage" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
