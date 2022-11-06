import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import chooseImg from "../../images/why-choose-us.png";
import "./choose.css";
const ChooseUs = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                odit tenetur assumenda qui nobis quam vitae aliquam quas ea,
                illum ipsum hic eligendi, non, numquam sunt praesentium a.
                Beatae sunt tempore, maiores corrupti fugit magni distinctio!
                Asperiores dignissimos qui nostrum vitae rem. Quisquam
                asperiores quam dignissimos nihil earum, corporis repellendus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nostrum, voluptates molestias nemo sed rerum explicabo
                porro exercitationem aut doloremque voluptatibus dolor. Rem
                suscipit distinctio est, ipsa eveniet voluptate ratione.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose__img">
              {videoPlay ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}
              {!videoPlay && (
                <span
                  className="play__icon"
                  onClick={() => setVideoPlay(!videoPlay)}
                >
                  <i className="ri-play-circle-line"></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
