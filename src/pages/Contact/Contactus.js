import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Navbar from "../../components/Navbar/Navbar";
import "./Contactus.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../sections/Footer/Footer";

const Contactus = () => {
  return (
    <>
      <section className="section-bg section-common contact-section">
        {" "}
        <Navbar />{" "}
        <SectionTitle
          title="Contact Us"
          description="We are here to assist you with any questions or appointment requests. Reach out to us and we’ll respond promptly."
        />{" "}
      </section>{" "}
      <section
        className="contact-form-area"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {" "}
        <ContactForm />{" "}
      </section>{" "}
      <Footer />{" "}
    </>
  );
};
export default Contactus;
