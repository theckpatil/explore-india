import React from "react";
import "../assets/css/landmark.css";

const Landmarks = () => {
  return (
    <section id="landmarks" className="landmark-section">
      <h2 className="section-title">Landmarks</h2>
      <div className="landmark-container">
        <div className="landmark-card">
          <div className="landmark-image">
            <img
              src="/images/fort-thumbnail.jpg"
              alt="Historical fort in India"
              loading="lazy"
            />
          </div>
          <div className="landmark-content">
            <h3>Forts</h3>
            <p>
              Indian forts are grand historical landmarks that reflect the
              country’s rich heritage and architectural brilliance. Forts are
              the pride of India.
            </p>
            <a
              href="https://www.incredibleindia.org/content/incredible-india-v2/en/popular-in-india/forts-and-palaces/all-forts-and-palaces.html"
              target="_self"
              className="learn-more"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="landmark-card ">
          <div className="landmark-image">
            <img
              src="/images/mhaisur-palace-thumbnail.jpg"
              alt="Historical palace in India"
              loading="lazy"
            />
          </div>
          <div className="landmark-content">
            <h3>Palaces</h3>
            <p>
              Indian palaces are impressive, ornate structures showcasing
              elaborate designs and reflecting centuries of royal history.
            </p>
            <a
              href="https://www.incredibleindia.org/content/incredible-india-v2/en/popular-in-india/forts-and-palaces/all-forts-and-palaces.html"
              target="_self"
              className="learn-more"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="landmark-card">
          <div className="landmark-image">
            <img
              src="/images/temple-thumbnail.jpg"
              alt="Historical tempale in India"
              loading="lazy"
            />
          </div>
          <div className="landmark-content">
            <h3>Spirituals</h3>
            <p>
              Indian temples are peaceful and beautifully made places where
              every detail brings a sense of calm and spiritual connection.
            </p>
            <a
              href="https://www.incredibleindia.org/content/incredible-india-v2/en/experiences/spiritual.html"
              target="_self"
              className="learn-more"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="landmark-card">
          <div className="landmark-image">
            <img
              src="/images/TajMahal-thumbnail.jpg"
              alt="Historical monuments in India"
              loading="lazy"
            />
          </div>
          <div className="landmark-content">
            <h3>Monuments</h3>
            <p>
              Indian monuments are grand and historic structures that tell the
              story of the country’s rich past and architectural beauty.
            </p>
            <a
              href="https://www.incredibleindia.org/content/incredible-india-v2/en/experiences/heritage/most-popular.html"
              target="_self"
              className="learn-more"
            >
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Stats Section --> */}
      <div className="india-stats">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">1.43 B</span>
            <span className="stat-text sminfo">Population</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">22</span>
            <span className="stat-text">Official Languages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">28</span>
            <span className="stat-text">States</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-text">Union Territories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">42</span>
            <span className="stat-text">UNESCO World Heritage Sites</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landmarks;
