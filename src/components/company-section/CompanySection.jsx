import React from "react";
import { Container, Row, Col } from "reactstrap";
const CompanySection = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                <i className="ri-vimeo-line"></i> Vimeo
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                {" "}
                <i className="ri-pinterest-line"></i> Pinterest
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                <i className="ri-dribbble-line"></i> Dribble
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                {" "}
                <i className="ri-apple-fill"></i> Apple
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                <i className="ri-finder-fill"></i> Finder
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-items-center gap-1">
                <i className="ri-google-fill"></i> Google
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CompanySection;
