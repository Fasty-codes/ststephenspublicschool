// import react from 'react';

import './Footer.css';
import { SlSocialFacebook, SlSocialTwitter, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Overview</h3>
                    <p>
                            St: Stephen's Public School is a leading educational institute
                            located at Kudassanad P.O, Pathanamthitta(Dist).
                        </p>
                    </div>

                    <div className="footer-section spacing">
                        <h3>Quick links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/admission">Admission</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact us</h3>
                        <p><i className="fab fa-envenlope"></i>Email: ststephenspublicschool@yahoo.com</p>
                        <p><i className="fab fa-phone"></i>Ph: 04734 - 252346</p>
                        <p><i className="fab fa-map-marker-alt"></i>Kudassanad P.O, Pathanamthitta(Dist)</p>
                        <p><i className="fab fa-pincode"></i>Kerala, Pin: 689512</p>
                    </div>
                </div>

                <div className="footer-section-f">
                    <h3 className='follow-head'>Follow Us</h3>
                    <div className="social-icons">
                        <a href="/" className="facebook"><SlSocialFacebook /></a>
                        <a href="/" className="twitter"><SlSocialTwitter /></a>
                        <a href="/" className="youtube"><SlSocialYoutube /></a>
                        <a href="/" className="instagram"><SlSocialInstagram /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} St. Stephen's Public School. All rights reserved.</p>
                </div>
            </footer>

    );
}

 export default Footer;       