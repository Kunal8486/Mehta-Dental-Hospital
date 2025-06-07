import React from "react";
import "./Faq.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <section
      className="faq-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {" "}
      <div className="container">
        {" "}
        <SectionTitle subTitle="FAQ" title="Frequently Asked Questions" />{" "}
        <div className="accordian-area">
          {" "}
          <div className="accordion" id="accordionExample">
            {" "}
            <div className="accordion-item">
              {" "}
              <h2 className="accordion-header" id="headingOne">
                {" "}
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  What dental services do you offer?{" "}
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                {" "}
                <div className="accordion-body">
                  {" "}
                  We offer comprehensive dental care including routine
                  check-ups, cleanings, fillings, root canals, crowns,
                  orthodontics, implants, and cosmetic dentistry.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="accordion-item">
              {" "}
              <h2 className="accordion-header" id="headingTwo">
                {" "}
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {" "}
                  Do you accept dental insurance?{" "}
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                {" "}
                <div className="accordion-body">
                  {" "}
                  Yes, we accept most major dental insurance plans. Please
                  contact our office to confirm if your specific insurance is
                  accepted.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="accordion-item">
              {" "}
              <h2 className="accordion-header" id="headingThree">
                {" "}
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {" "}
                  How do I schedule an appointment?{" "}
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                {" "}
                <div className="accordion-body">
                  {" "}
                  You can schedule an appointment by calling our clinic, using
                  our online booking system, or visiting us in person.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="accordion-item">
              {" "}
              <h2 className="accordion-header" id="headingFour">
                {" "}
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {" "}
                  What should I expect during my first visit?{" "}
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                {" "}
                <div className="accordion-body">
                  {" "}
                  During your first visit, our dentist will conduct a thorough
                  oral examination, discuss your dental history, and create a
                  personalized treatment plan.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="accordion-item">
              {" "}
              <h2 className="accordion-header" id="headingFive">
                {" "}
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  {" "}
                  What are your office hours?{" "}
                </button>{" "}
              </h2>{" "}
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                {" "}
                <div className="accordion-body">
                  {" "}
                  Our office is open Monday to Friday from 9:00 AM to 6:00 PM
                  and Saturday from 9:00 AM to 2:00 PM. We are closed on
                  Sundays.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Faq;
