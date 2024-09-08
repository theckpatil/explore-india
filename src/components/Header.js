import React, { useState, useEffect } from "react";
import "../assets/css/style.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <header className="hero-section" id="home">
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo">Explore India</div>
        <div className={`nav-toggle ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
          <span style={{ backgroundColor: "orangered" }}></span>
          <span></span>
          <span style={{ backgroundColor: "green" }}></span>
        </div>
        <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#landmarks">Landmarks</a>
          </li>
          <li>
            <a href="#state">States</a>
          </li>
          <li>
            <a href="#UT">Union Territories</a>
          </li>
        </ul>
      </nav>
      {isSticky && <div className="navbar-placeholder"></div>}
      <div className="hero-bg-section">
        <div className="marquee-container">
          <div className="marquee-text">
            <span className="star">★</span> Welcome to India! &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारत में आपका स्वागत है!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारतात आपले स्वागत आहे!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;Welcome to India!
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारत में आपका स्वागत है!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारतात आपले स्वागत आहे!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;Welcome to India!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारत में आपका स्वागत है!
            &nbsp;&nbsp;&nbsp;
            <span className="star">★</span> &nbsp;भारतात आपले स्वागत आहे!
            &nbsp;&nbsp;&nbsp;<span className="star">★</span>
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
