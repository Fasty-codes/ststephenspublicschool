import React from 'react';
import slide4 from '../assets/images/slide4.jpg';
import './Contact.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import location from '../assets/images/location.png';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      {/* Hero Section */}
      <div className="contact-hero">
        <img src={slide4} alt="School Building" />
        <h1>Contact</h1>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-item">
          <img src={location} alt="Location" className="contact-icon" />
          <h2>St:Stephen's Public School And Junior College,<br />Kudassanadu Pathanamtitta, Kerala - 689515</h2>
        </div>

        <div className="contact-item">
          <img src={phone} alt="Phone" className="contact-icon" />
          <h2>04734 - 252346</h2>
        </div>

        <div className="contact-item">
          <img src={email} alt="Email" className="contact-icon" />
          <h2>st:stephenspublicschool@yahoo.com</h2>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.595108887516!2d76.67461391429478!3d9.19094589340866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0610db46595445%3A0x2e6b9c773d1c33b8!2sSt.Stephens+Public+School!5e0!3m2!1sen!2sin!4v1543990151440" 
            width="100%" 
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;