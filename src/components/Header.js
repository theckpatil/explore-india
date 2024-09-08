import React, { useState, useEffect, useRef } from "react";
import "../assets/css/style.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const navLinksRef = useRef(null);
  const navToggleRef = useRef(null);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.pageYOffset > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle navbar visibility
  const toggleNav = () => setIsNavActive((prev) => !prev);

  // Close the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target) &&
        navToggleRef.current &&
        !navToggleRef.current.contains(event.target)
      ) {
        setIsNavActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="hero-section" id="home">
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo">Explore India</div>
        <div
          ref={navToggleRef}
          className={`nav-toggle ${isNavActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span style={{ backgroundColor: "orangered" }}></span>
          <span></span>
          <span style={{ backgroundColor: "green" }}></span>
        </div>
        {/* <ul ref={navLinksRef} className={`nav-links ${isNavActive ? "active" : ""}`}>
          {["Home", "Landmarks", "States", "Union Territories"].map((text, index) => (
            <li key={index}>
              <a href={`#${text.replace(" ", "").toLowerCase()}`} onClick={() => setIsNavActive(false)}>
                {text}
              </a>
            </li>
          ))}
        </ul> */}
        <ul
          ref={navLinksRef}
          className={`nav-links ${isNavActive ? "active" : ""}`}
        >
          {["home", "landmarks", "state", "UT"].map((id, index) => (
            <li key={index}>
              <a
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault(); // Prevent default anchor behavior
                  const targetElement = document.getElementById(id);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                  }
                  setIsNavActive(false); // Close the navbar
                }}
              >
                {["Home", "Landmarks", "States", "Union Territories"][index]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isSticky && <div className="navbar-placeholder"></div>}
      <div className="hero-bg-section">
        <div className="marquee-container">
          <div className="marquee-text">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <span className="star">★</span> Welcome to India!
                  &nbsp;&nbsp;&nbsp;
                  <span className="star">★</span> &nbsp;भारत में आपका स्वागत है!
                  &nbsp;&nbsp;&nbsp;
                  <span className="star">★</span> &nbsp;भारतात आपले स्वागत आहे!
                  &nbsp;&nbsp;&nbsp;
                </React.Fragment>
              ))}
          </div>
        </div>
        <img className="hero-desktop" src="/images/i7.png" alt="Hero-Image" />
      </div>
      <div id="top" className="top" onClick={() => window.scrollTo(0, 0)}>
        <i className="fa-solid fa-arrow-up fa-bounce"></i>
      </div>
    </header>
  );
};

export default Header;
