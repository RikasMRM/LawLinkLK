import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Rights, <br />
          Our Responsibility
        </h1>
        <p>
          LawLinkLK - Your Rights, Our Responsibility. Connecting you with
          trusted lawyers in Sri Lanka, empowering you to assert your rights
          with confidence. Whether it's legal advice, representation, or
          consultation, we bridge the gap between justice seekers and
          experienced attorneys, ensuring your legal matters are handled with
          utmost care and expertise.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
