import React from "react";
import About from "../components/about-us/About";
import ChooseUs from "../components/choose-us/ChooseUs";
import CompanySection from "../components/company-section/CompanySection";
import Courses from "../components/courses-section/Courses";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import FreeCourse from "../components/free-course/FreeCourse";
import Header from "../components/header/Header";
import HeroSection from "../components/hero-section/HeroSection";
import Newsletter from "../components/newsletter/NewsLetter";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySection />
      <About />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
