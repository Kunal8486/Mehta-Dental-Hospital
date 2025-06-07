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
                subTitle="EXPERTS IN DENTAL"
                title="Top-notch dentistry from Seattle’s leading professionals"
                description="Our experienced team is committed to providing exceptional dental care using the latest techniques and modern equipment, all in a comfortable and friendly environment."
              />
              <ul>
                <li>
                  <BsFillCheckCircleFill />
                  Top-quality dental professionals with years of experience
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Cutting-edge technology and advanced dental procedures
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Affordable pricing and discounts on comprehensive treatments
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
