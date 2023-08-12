import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              At LawLinkLK, we are passionate about safeguarding the rights of
              individuals and businesses in Sri Lanka. Our platform was born
              from the vision to create a seamless connection between those
              seeking legal assistance and highly skilled lawyers committed to
              upholding justice. Our team is driven by the belief that everyone
              deserves access to quality legal services, and we strive to be the
              reliable link that fulfills this need. With a commitment to
              excellence and customer satisfaction, LawLinkLK offers a
              user-friendly interface that simplifies the process of finding and
              booking trusted lawyers. We take pride in empowering our users to
              navigate the complexities of the legal system with ease, knowing
              that their rights are in capable hands. Join us on this journey to
              protect and advocate for Your Rights, as it is Our
              Responsibility.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
