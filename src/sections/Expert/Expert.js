import React from "react";
import "./Expert.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from "../../assets/expert.png";

const Expert = () => {
  return (
    <section
      className="expert-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="expert-text">
              <SectionTitle
                subTitle="ADVANCED DENTAL TECHNOLOGY"
                title="Top-tier care powered by state-of-the-art equipment"
                description="At our dental hospital, we use the latest machines and tools to ensure accurate diagnoses, painless treatments, and faster recovery—all in a safe and hygienic environment."
              />
              <ul>
                <li>
                  <BsFillCheckCircleFill />
                  Premium dental equipment for precision and comfort
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Modern technology supporting advanced procedures
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Transparent pricing and value-driven treatment plans
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="expert-img">
              <img src={expertImg} alt="Expert Dental Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;
