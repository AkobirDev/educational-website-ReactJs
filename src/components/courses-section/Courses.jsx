import React from "react";
import "./courses.css";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../images/web-design.png";
import courseImg2 from "../../images/graphics-design.png";
import courseImg3 from "../../images/ui-ux.png";
import CourseCard from "./CourseCard";
const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 9.1,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 10,
    students: 12.5,
    rating: 4.2,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 7,
    students: 15.0,
    rating: 5.0,
    imgUrl: courseImg3,
  },
];
const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="courses__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate voluptates, perspiciatis delectus eius hic tempore
                  suscipit iste quia voluptate sunt labore ullam deserunt
                  laudantium? Officiis!
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>

          {coursesData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
