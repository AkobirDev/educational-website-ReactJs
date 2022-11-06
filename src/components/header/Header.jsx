import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Page",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];
const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center">
            <h2>
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, i) => {
                  return (
                    <li key={i} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-3">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
