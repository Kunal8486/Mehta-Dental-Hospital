import React from "react";
import "./Emergency.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import EmergencyImg from "../../assets/emergency.png";
import { Link } from "react-router-dom";

const Emergency = () => {
  return (
    <section
      className="emergency-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="emergency-img">
              <img src={EmergencyImg} alt="Emergency" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="emergency-text">
              <SectionTitle
                subTitle="Dental 24H Emergency"
                title="Gentle, friendly treatment from our local dental experts"
                description="Experiencing a dental emergency? Whether it’s a severe toothache, broken tooth, or swelling, our team is available 24/7 to provide immediate, compassionate care. Your comfort and relief are our top priorities."
              />
              <div className="theme-btn">
                <Link to="/">Book an appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
