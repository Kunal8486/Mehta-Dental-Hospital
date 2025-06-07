import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import priorityImg from "../../assets/about/priority.png";
import "./Priority.scss";

const Priority = () => {
  return (
    <section
      className="priority-section emergency-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {" "}
      <div className="container-fluid">
        {" "}
        <div className="row align-items-center">
          {" "}
          <div className="col-lg-6 col-md-6">
            {" "}
            <div className="priority-img">
              {" "}
              <img src={priorityImg} alt="Our Priority" />{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-6 col-md-6">
            {" "}
            <div className="priority-text">
              {" "}
              <SectionTitle
                subTitle="OUR PRIORITY"
                title="Our clients are our priority"
                description="We are committed to providing the highest quality dental care with personalized attention to each patient, ensuring your comfort and satisfaction."
              />{" "}
              <div className="theme-btn">
                {" "}
                <Link to="/appointment">Book an appointment</Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Priority;
