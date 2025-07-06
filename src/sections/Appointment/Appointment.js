import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247969.52389321974!2d75.4534149!3d29.5119276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391173baaad22c4d%3A0xc656f0923dc9d5db!2sMehta%20Dental%20Clinic%20And%20Implant%20Centre!5e1!3m2!1sen!2sin!4v1751797474864!5m2!1sen!2sin'
    return (
    <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="google-map">
                        <iframe title='map' src={mapLink}></iframe>
                        <div className="location-name">
                            <AiFillHome />
                            <p>GT Road, Fatehbad, Haryana</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="appointment-form-area">
                        <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Mehta Dental Hospital is pleasure"
                            description="Experience personalized dental care with advanced treatments in a comfortable and friendly environment. Schedule your visit with our expert team today."
                        />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Appointment;