// import React, { useState, useEffect } from 'react';
// import './HomePage.css';
// import Hero from '../components/Hero';

// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import logo from '../assets/images/logo.png';
// // import logoJpeg from '../assets/images/logo.jpeg';
// // import menuIcon from '../assets/images/menu-icon.png';
// // import closeIcon from '../assets/images/close.png';
// import adImage from '../assets/images/slide21.jpg';
// // import schoolImage from '../assets/images/slide2.jpg';
// import schoolBandImage from '../assets/images/slide14.png';
// import exhibitionImage from '../assets/images/slide31.png';
// import extraCurricularImage from '../assets/images/extra.jpg';
// import labFacilitiesImage from '../assets/images/slide41.jpg';
// import galleryImg1 from '../assets/images/slide4.jpg';
// import galleryImg2 from '../assets/images/slide7.jpg';
// import galleryImg3 from '../assets/images/slide17.png';
// import locImg from '../assets/images/location.png';
// import phone from '../assets/images/phone.png';
// import email from '../assets/images/email.png';
// import classImage from '../assets/images/classimage.png';
// import children from '../assets/images/children.png';
// import calender from '../assets/images/calendar.png';
// import teacher from '../assets/images/teacher.png';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';

// function HomePage() {
//     const [showAdPopup, setShowAdPopup] = useState(true);
//     // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     // Close popup after 5 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowAdPopup(false);
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
        
//         <div className="App">
//             <Header />

//             {/* Admission Popup */}
//             {showAdPopup && (
//                 <div className="ad-popup" id="adPopup">
//                     <div className="ad-content">
//                         <span className="close-btn" onClick={() => setShowAdPopup(false)}>&times;</span>
//                         <h2>Admissions Open!</h2>
//                         <p>Join our Vibrant learning community.</p>
//                         <img src={adImage} alt="SchoolAd" className="ad-Image" />
//                         <a href="/admission" className="ad-btn">Apply Now</a>
//                     </div>
//                 </div>
//             )}

//             {/* Main Content */}
//             <main>
//                 {/* School Image */}
//                 {/* <img className="school" src={schoolImage} alt="School" style={{ width: '100%' }} /> */}
//                 <Hero />

//                 {/* About Section */}
//                 <section id="about">
//                     <div className="box">
//                         <img src={adImage} width="450" height="450" alt="School Building" />
//                         <div className="inner">
//                             <h2>About us</h2>
//                             <p>
//                                 St:Stephen's Public school was established in 1980 and opened in 2005.
//                                 This institution is run by the St Stephen's Charitable Society of St Stephen's orthodox cathedral.
//                                 The school is situated in a lovely place, adjacent to St Stephen's Orthodox Cathedral and Piligrim Centre.
//                                 St Stephens Public School is a Co-Ed school affiliated to CBSE.
//                                 St Stephen's Public School started its journey in 1980 and later on affiliated to CBSE in 1992.
//                             </p>
//                             <a href="/about" className="button">For More Details</a>
//                         </div>
//                     </div>

//                     {/* Vision & Mission */}
//                     <section id="vi-mi">
//                         <div>
//                             <h2>Vision</h2>
//                             <p>
//                                 Aims to be an institution of excellence and fosters intellectually competent,
//                                 spiritually mature morally upright, psychologically integrated, Physically healthy
//                                 and socially acceptable champions of justice, love, truth & peace.
//                             </p>
//                         </div>
//                         <div>
//                             <h2>Mission</h2>
//                             <p>
//                                 We empower students with high quality and future learning, under the aegis of
//                                 vocationally committed, professionally competent, morally upright, just and humane educators.
//                             </p>
//                         </div>
//                     </section>

//                     {/* Academics */}
//                     <div className="academics">
//                         <div className="academics-content">
//                             <h2 className="heading">Academics</h2>

//                             <div className="academics-grid">
//                                 {/* CBSE Card */}
//                                 <div className="academics-card">
//                                     <div className="academics-icon">
//                                         <img src="https://cnextassets.careers360.com/frontend-school/_react_school/assets/streams_offered.png" alt="CBSE" />
//                                     </div>
//                                     <h3>CBSE</h3>
//                                     <h4>Curriculum</h4>
//                                     <h3>English Medium</h3>
//                                 </div>

//                                 {/* Classes Card */}
//                                 <div className="academics-card">
//                                     <div className="class-icon">
//                                         <img src={classImage} alt="Classes" />
//                                     </div>
//                                     <h4>Classes</h4>
//                                     <h3>Pre-nursery - 12th</h3>
//                                 </div>

//                                 {/* Co-ed */}
//                                 <div className="academics-card">
//                                     <div className="ed-icon">
//                                         <img src={children} alt="Co-Ed" />
//                                     </div>
//                                     <div>
//                                         <h4>Gender</h4>
//                                         <h3 className="diff">Co-Ed</h3>
//                                     </div>
//                                 </div>

//                                 {/* Year Card */}
//                                 <div className="academics-card">
//                                     <div className="calender-icon">
//                                         <img src={calender} alt="Year of Opening" />
//                                     </div>
//                                     <h4>Year of Opening</h4>
//                                     <h1>2005</h1>
//                                 </div>

//                                 {/* Teachers Card */}
//                                 <div className="academics-card">
//                                     <div className="teacher-icon">
//                                         <img src={teacher} alt="Teachers Count" />
//                                     </div>
//                                     <h4>Teachers Count</h4>
//                                     <h2>22</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Features */}
//                     <section className="cards">
//                         <section className="wrapper">
//                             <div className="top">
//                                 <h2 className="heading">Features</h2>
//                                 <a href="/about" className="button rspv-btn">More&rarr;</a>
//                             </div>
//                             <div className="card-container">
//                                 <div className="card">
//                                     <img src={schoolBandImage} alt="School Band" />
//                                     <h3>School Band</h3>
//                                     <p>This is a short description for the first card.</p>
//                                 </div>
//                                 <div className="card">
//                                     <img src={extraCurricularImage} alt="Activities" />
//                                     <h3>Extra Curricular Activities</h3>
//                                     <p>This is a short description for the second card.</p>
//                                 </div>
//                                 <div className="card">
//                                     <img src={labFacilitiesImage} alt="Lab" />
//                                     <h3>Lab Facilities</h3>
//                                     <p>There are spacious and well equipped Lab</p>
//                                 </div>
//                                 <div className="card rspv-crd">
//                                     <img src={exhibitionImage} alt="Exhibition" />
//                                     <h3>School Exhibition</h3>
//                                     <p>This is a short description for the second card.</p>
//                                 </div>
//                             </div>
//                         </section>
//                     </section>

//                     {/* Gallery */}
//                     <section id="gallery">
//                         <div className="gallery-content">
//                             <div className="gallery-header">
//                                 <h1>Our Gallery</h1>
//                                 <a href="/gallery" className="gallery-btn">View More Images</a>
//                             </div>

//                             <div className="gallery-grid">
//                                 <div className="gallery-item">
//                                     <img src={galleryImg1} alt="School Activity" />
//                                 </div>
//                                 <div className="gallery-item">
//                                     <img src={galleryImg2} alt="Classroom" />
//                                 </div>
//                                 <div className="gallery-item">
//                                     <img src={galleryImg3} alt="School Event" />
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </section>

//                 {/* Contact Section */}
//                 <section id="contact">
//                     <h2 className="heading">Get In Touch</h2>
//                     <div className="contact-container">
//                         <div className="contact-info">
//                             <div className="contact-details">
//                                 <div className="contact-item">
//                                     <div className="contact-icon">
//                                         <img src={locImg} alt="Location" />
//                                     </div>
//                                     <div className="contact-text">
//                                         <h3>Our Address</h3>
//                                         <p>St:Stephen's Public School And Junior College,<br />
//                                             Kudassanadu Pathanamtitta, Kerala - 689515</p>
//                                     </div>
//                                 </div>

//                                 <div className="contact-item">
//                                     <div className="contact-icon">
//                                         <img src={phone} alt="Phone" />
//                                     </div>
//                                     <div className="contact-text">
//                                         <h3>Phone Number</h3>
//                                         <p>04734 - 252346</p>
//                                     </div>
//                                 </div>

//                                 <div className="contact-item">
//                                     <div className="contact-icon">
//                                         <img src={email} alt="Email" />
//                                     </div>
//                                     <div className="contact-text">
//                                         <h3>Email Address</h3>
//                                         <a href="mailto:st:stephenspublicschool@yahoo.com">st:stephenspublicschool@yahoo.com</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="map-container">
//                             <iframe
//                                 title="School Location"
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.595108887516!2d76.67461391429478!3d9.19094589340866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0610db46595445%3A0x2e6b9c773d1c33b8!2sSt.Stephens+Public+School!5e0!3m2!1sen!2sin!4v1543990151440"
//                                 allowFullScreen
//                                 loading="lazy"
//                             ></iframe>
//                         </div>
//                     </div>
//                 </section>

//             </main>

//             {/* Footer */}
//             <Footer />

//         </div>
//     );
// }

// export default HomePage;

import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaArrowRight, FaTimes, FaQuoteLeft } from 'react-icons/fa';

// NOTE: The original <Hero /> component wasn't available to edit, so the
// landing section below is built directly into this file. If you still
// have components/Hero.jsx and want it back, just say the word — otherwise
// it's safe to delete since it's no longer imported here.

import adImage from '../assets/images/slide21.jpg';
import heroImage from '../assets/images/slide9.jpg';
import schoolBandImage from '../assets/images/slide14.png';
import exhibitionImage from '../assets/images/slide31.png';
import extraCurricularImage from '../assets/images/extra.jpg';
import labFacilitiesImage from '../assets/images/slide41.jpg';
import galleryImg1 from '../assets/images/slide4.jpg';
import galleryImg2 from '../assets/images/slide7.jpg';
import galleryImg3 from '../assets/images/slide17.png';
import locImg from '../assets/images/location.png';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';
import classImage from '../assets/images/classimage.png';
import children from '../assets/images/children.png';
import calender from '../assets/images/calendar.png';
import teacher from '../assets/images/teacher.png';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function HomePage() {
    const [showAdPopup, setShowAdPopup] = useState(true);

    // Auto-dismiss the admission popup
    useEffect(() => {
        const timer = setTimeout(() => setShowAdPopup(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    // Close popup on Escape
    useEffect(() => {
        if (!showAdPopup) return;
        const onKey = (e) => { if (e.key === 'Escape') setShowAdPopup(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showAdPopup]);

    return (
        <div className="App">
            <Header />

            {/* Admission Popup */}
            {showAdPopup && (
                <div className="ad-popup" onClick={() => setShowAdPopup(false)}>
                    <div className="ad-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowAdPopup(false)} aria-label="Close">
                            <FaTimes />
                        </button>
                        <span className="ad-badge">Admissions Open — 2026&ndash;27</span>
                        <img src={adImage} alt="Students at St. Stephen's Public School" className="ad-Image" />
                        <h2>Join Our School Family</h2>
                        <p>Applications are now open for the upcoming academic year, across all grades.</p>
                        <a href="/admission" className="ad-btn">Apply Now <FaArrowRight size={12} /></a>
                    </div>
                </div>
            )}

            <main>
                {/* ── Hero / Landing Section ── */}
                <section className="hero" id="home">
                    <div className="hero-media">
                        <img src={heroImage} alt="St. Stephen's Public School campus" className="hero-img" />
                        <div className="hero-scrim" />
                    </div>

                    <div className="hero-content">
                        <span className="hero-eyebrow">CBSE Affiliated&nbsp; · &nbsp;Co-Ed&nbsp; · &nbsp;Pre-Nursery – XII</span>
                        <h1 className="hero-title">A School Built on<br />Faith, Character &amp; Curiosity</h1>
                        <p className="hero-sub">
                            Beside St. Stephen's Orthodox Cathedral in Kudassanadu, we've guided
                            students since 1980 — nurturing confident, capable, compassionate learners.
                        </p>
                        <div className="hero-actions">
                            <a href="/admission" className="btn btn-primary">Apply for Admission</a>
                            <a href="/gallery" className="btn btn-ghost">
                                Explore Our Campus <FaArrowRight size={12} />
                            </a>
                        </div>
                    </div>

                    <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
                        <span className="hero-scroll-line" />
                    </a>
                </section>

                {/* Floating stat strip, overlaps hero */}
                <div className="stat-strip">
                    <div className="stat-strip-inner">
                        <div className="stat-block">
                            <h3>1980</h3>
                            <p>Founded</p>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-block">
                            <h3>CBSE</h3>
                            <p>Affiliated</p>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-block">
                            <h3>Co-Ed</h3>
                            <p>Pre-N – XII</p>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-block">
                            <h3>22+</h3>
                            <p>Faculty</p>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <section id="about">
                    <div className="box">
                        <div className="box-media">
                            <img src={adImage} alt="St. Stephen's Public School building" className="box-img" />
                            <div className="box-frame" />
                            <div className="box-badge">
                                <span className="box-badge-year">1980</span>
                                <span className="box-badge-label">Est.</span>
                            </div>
                        </div>
                        <div className="inner">
                            <span className="eyebrow">About Us</span>
                            <h2>A Legacy of Faith and Learning</h2>
                            <p>
                                St. Stephen's Public School was established in 1980 by the St. Stephen's
                                Charitable Society of St. Stephen's Orthodox Cathedral, and opened its doors
                                in 2005. Set beside the Cathedral and Pilgrim Centre, our Co-Ed campus has
                                been affiliated to CBSE since 1992 — carrying forward a tradition of academic
                                rigor and moral grounding for over four decades.
                            </p>
                            <a href="/about" className="button">For More Details <FaArrowRight size={12} /></a>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <section id="vi-mi">
                        <div className="vm-card">
                            <FaQuoteLeft className="vm-quote" />
                            <h2>Vision</h2>
                            <p>
                                Aims to be an institution of excellence and fosters intellectually competent,
                                spiritually mature morally upright, psychologically integrated, Physically healthy
                                and socially acceptable champions of justice, love, truth &amp; peace.
                            </p>
                        </div>
                        <div className="vm-card">
                            <FaQuoteLeft className="vm-quote" />
                            <h2>Mission</h2>
                            <p>
                                We empower students with high quality and future learning, under the aegis of
                                vocationally committed, professionally competent, morally upright, just and humane educators.
                            </p>
                        </div>
                    </section>

                    {/* At a Glance */}
                    <div className="academics">
                        <div className="academics-content">
                            <span className="eyebrow eyebrow-center">Quick Facts</span>
                            <h2 className="heading">At a Glance</h2>

                            <div className="academics-grid">
                                <div className="academics-card">
                                    <div className="academics-icon">
                                        <img src="https://cnextassets.careers360.com/frontend-school/_react_school/assets/streams_offered.png" alt="CBSE" />
                                    </div>
                                    <h4>Curriculum</h4>
                                    <h3>CBSE · English Medium</h3>
                                </div>

                                <div className="academics-card">
                                    <div className="class-icon">
                                        <img src={classImage} alt="Classes" />
                                    </div>
                                    <h4>Classes</h4>
                                    <h3>Pre-nursery – 12th</h3>
                                </div>

                                <div className="academics-card">
                                    <div className="ed-icon">
                                        <img src={children} alt="Co-Ed" />
                                    </div>
                                    <h4>Gender</h4>
                                    <h3 className="diff">Co-Ed</h3>
                                </div>

                                <div className="academics-card">
                                    <div className="calender-icon">
                                        <img src={calender} alt="Year of Opening" />
                                    </div>
                                    <h4>Year of Opening</h4>
                                    <h1>2005</h1>
                                </div>

                                <div className="academics-card">
                                    <div className="teacher-icon">
                                        <img src={teacher} alt="Teachers Count" />
                                    </div>
                                    <h4>Teachers Count</h4>
                                    <h2>22</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <section className="cards">
                        <section className="wrapper">
                            <div className="top">
                                <div>
                                    <span className="eyebrow">Campus Life</span>
                                    <h2 className="heading heading-left">Why Choose St. Stephen's</h2>
                                </div>
                                <a href="/about" className="button rspv-btn">More&rarr;</a>
                            </div>
                            <div className="card-container">
                                <div className="card">
                                    <img src={schoolBandImage} alt="School Band" loading="lazy" />
                                    <h3>School Band</h3>
                                    <p>Our marching and concert band gives students a stage to build discipline, rhythm and teamwork outside the classroom.</p>
                                </div>
                                <div className="card">
                                    <img src={extraCurricularImage} alt="Activities" loading="lazy" />
                                    <h3>Extra Curricular Activities</h3>
                                    <p>From sports to art clubs, students discover new interests and build confidence beyond the syllabus.</p>
                                </div>
                                <div className="card">
                                    <img src={labFacilitiesImage} alt="Lab" loading="lazy" />
                                    <h3>Lab Facilities</h3>
                                    <p>Spacious, well-equipped Physics, Chemistry, Biology and Computer labs bring every concept to life.</p>
                                </div>
                                <div className="card rspv-crd">
                                    <img src={exhibitionImage} alt="Exhibition" loading="lazy" />
                                    <h3>School Exhibition</h3>
                                    <p>An annual showcase where students exhibit projects, inventions and ideas to the wider school community.</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* Gallery Preview */}
                    <section id="gallery">
                        <div className="gallery-content">
                            <div className="gallery-header">
                                <div>
                                    <span className="eyebrow">Moments &amp; Memories</span>
                                    <h1>Our Gallery</h1>
                                </div>
                                <a href="/gallery" className="gallery-btn">View More Images</a>
                            </div>

                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src={galleryImg1} alt="School Activity" loading="lazy" />
                                    <div className="gallery-caption">School Activity</div>
                                </div>
                                <div className="gallery-item">
                                    <img src={galleryImg2} alt="Classroom" loading="lazy" />
                                    <div className="gallery-caption">Classroom</div>
                                </div>
                                <div className="gallery-item">
                                    <img src={galleryImg3} alt="School Event" loading="lazy" />
                                    <div className="gallery-caption">School Event</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* CTA Banner */}
                <section className="cta-banner">
                    <div className="cta-inner">
                        <span className="cta-eyebrow">Admissions 2026&ndash;27</span>
                        <h2 className="cta-title">Considering St. Stephen's for Your Child?</h2>
                        <p className="cta-sub">
                            Schedule a campus visit or apply online — our admissions team is happy
                            to walk you through classes, fees and the enrolment process.
                        </p>
                        <div className="cta-actions">
                            <a href="/admission" className="btn btn-primary">Apply for Admission</a>
                            <a href="#contact" className="btn btn-ghost">Contact Us</a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2 className="heading">Get In Touch</h2>
                    <p className="section-sub">Questions about admissions, academics or campus visits? We're here to help.</p>
                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={locImg} alt="Location" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Our Address</h3>
                                        <p>St. Stephen's Public School And Junior College,<br />
                                            Kudassanadu Pathanamtitta, Kerala - 689515</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={phone} alt="Phone" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Phone Number</h3>
                                        <p>04734 - 252346</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <img src={email} alt="Email" />
                                    </div>
                                    <div className="contact-text">
                                        <h3>Email Address</h3>
                                        <a href="mailto:st:stephenspublicschool@yahoo.com">st:stephenspublicschool@yahoo.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="School Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.595108887516!2d76.67461391429478!3d9.19094589340866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0610db46595445%3A0x2e6b9c773d1c33b8!2sSt.Stephens+Public+School!5e0!3m2!1sen!2sin!4v1543990151440"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;