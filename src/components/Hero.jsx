import React from "react";
import "./Hero.css";
import heroBackground from '../assets/images/slide13.png';
import slide1 from '../assets/images/slide3.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBackground} alt="St. Stephen's School Campus" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>St. Stephen's Public School & Junior College</h1>
          <p>
            Kudassanad, Pathanamthitta, Kerala <br />
            Estd. 1980 · Affiliated to <strong>CBSE</strong> (since 1992) · Co-Ed · English Medium
          </p>
          <div className="hero-buttons">
            <a href="About" className="btn btn-primary">Explore School</a>
            <a href="Contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={slide1} alt="School Group" />
          <div className="image-glow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;