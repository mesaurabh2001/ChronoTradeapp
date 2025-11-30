// frontend/src/pages/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/Navbar/TopNavbar";

const LandingPage = () => {
  return (
    <div className="page landing-page">
      <TopNavbar />
      <div className="hero">
        <div className="hero-text">
          <h1>Exchange Skills, Not Money</h1>
          <p className="subtitle">Time is the new currency.</p>
          <div className="hero-buttons">
            <Link className="btn-primary" to="/signup">
              Join Now
            </Link>
            <a className="btn-outline" href="#how-it-works">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          {/* you can drop an image here later */}
        </div>
      </div>

      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <h3>Offer Skill</h3>
            <p>Share your skills with the community.</p>
          </div>
          <div className="how-card">
            <h3>Earn Credit</h3>
            <p>Earn time credits for the skills you offer.</p>
          </div>
          <div className="how-card">
            <h3>Spend Credit</h3>
            <p>Use time credits to learn new skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
