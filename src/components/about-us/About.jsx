import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../images/about-us.png";
import CountUp from "react-countup";
const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel
                facere ad accusamus reprehenderit veritatis non doloremque quos
                nostrum nisi. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae, provident!
              </p>
              <div className="about__counter">
                <div className="d-flex align-items-center gap-5">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Project</p>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Project</p>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
