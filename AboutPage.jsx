import { React } from 'react';
// import { React, useRef, useEffect } from 'react';

import './AboutPage.css';
// import { FaMouse } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import oldImage from '../assets/images/old.png';
import managerImg from '../assets/images/manager.png';
import asstImg from '../assets/images/asst.png';
import secretaryImg from '../assets/images/secretary.png';
import principalImg from '../assets/images/principal.png';
import vicePrincipalImg from '../assets/images/vice principal.png';
import bulbImg from '../assets/images/light-bulb.png';
import adImg from '../assets/images/slide43.png';
import { firstCarouselImages, secondCarouselImages } from '../facilityImages';



const AboutPage = () => {

    return (
        <div className="about-page">
            <Header />

            <section id="about-landing">
                <div className="landing-content">
                    <h1>About St. Stephen's</h1>
                    <p>Established in 1980, we are a premier educational institution committed to nurturing young minds with academic excellence and moral values</p>
                </div>
                <div class="scroll-container">
                    <div class="mouse-scroll"></div>
                </div>
            </section>

            <br />

            <section id="governing">
                <div class="governing-header">
                    <h1>Governing Board Members</h1>
                    <div class="underline"></div>
                </div>

                <div class="governing-grid">
                    <div class="member-card">
                        <div class="member-img-container">
                            <img src={managerImg} alt="School Manager" class="member-img" />
                        </div>
                        <div class="member-info">
                            <h3>Rev. Fr Wilson Sankarathil</h3>
                            <p class="position">School Manager</p>
                        </div>
                    </div>

                    <div class="member-card">
                        <div class="member-img-container">
                            <img src={asstImg} alt="Assistant Manager" class="member-img" />
                        </div>
                        <div class="member-info">
                            <h3>Rev. Fr Tino Thankachan</h3>
                            <p class="position">School Asst. Manager</p>
                        </div>
                    </div>

                    <div class="member-card">
                        <div class="member-img-container">
                            <img src={secretaryImg} alt="School Secretary" class="member-img" />
                        </div>
                        <div class="member-info">
                            <h3>Jose Mathew</h3>
                            <p class="position">School Secretary</p>
                        </div>
                    </div>

                    <div class="member-card">
                        <div class="member-img-container">
                            <img src={principalImg} alt="Principal" class="member-img" />
                        </div>
                        <div class="member-info">
                            <h3>Mrs Deepa G Pillai</h3>
                            <p class="position">Principal</p>
                        </div>
                    </div>

                    <div class="member-card">
                        <div class="member-img-container">
                            <img src={vicePrincipalImg} alt="Vice Principal" class="member-img" />
                        </div>
                        <div class="member-info">
                            <h3>Sunita Shihab</h3>
                            <p class="position">Vice Principal</p>
                        </div>
                    </div>
                </div>

                <br />

                <div class="member-list-container">
                    <h3 class="member-list-title">Additional Governing Members</h3>
                    <div class="member-list">
                        <ol class="styled-member-list">
                            <li>
                                <span class="member-name">Prof.Dr. K C Raju Kottoor</span>
                                <span class="member-position">(Church Trustee)</span>
                            </li>
                            <li>
                                <span class="member-name">Mr Sibi Koshy</span>
                                <span class="member-position">(Church Secretary)</span>
                            </li>
                            <li>
                                <span class="member-name">Sri. Chacko Georgrkutty</span>
                                <span class="member-position">(Kottor)</span>
                            </li>
                            <li>
                                <span class="member-name">Sri. Rajeev Venad</span>
                            </li>
                            <li>
                                <span class="member-name">Dr. Vinod Raj</span>
                            </li>
                            <li>
                                <span class="member-name">Sri. Shiju Mathew</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="why">
                <div class="why-container">
                    <div class="why-content">
                        <h2 class="why-title">Why Choose Us</h2>
                        <div class="why-reasons">
                            <ul class="feature-list">
                                <li class="feature-item">
                                    <span class="feature-icon">🎓</span>
                                    <span class="feature-text">Trained & Dedicated Educators</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">🔬</span>
                                    <span class="feature-text">Well Equipped Lab</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">⚽</span>
                                    <span class="feature-text">Spacious Playground</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">🎭</span>
                                    <span class="feature-text">Extra-Curricular Activities</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">💻</span>
                                    <span class="feature-text">Digital Classroom</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">📜</span>
                                    <span class="feature-text">Education Plans as per NEP 2020</span>
                                </li>
                                <li class="feature-item">
                                    <span class="feature-icon">🌱</span>
                                    <span class="feature-text">Nurturing Life Skills</span>
                                </li>
                            </ul>
                            <div class="innovation-graphic">
                                <img src={bulbImg} alt="Innovation" class="bulb-img" />
                                <div class="pulse-effect"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facilities">
                <h1 className="facilities-title">Our Facilities</h1>

                <div className="facilities-grid">
                    {firstCarouselImages.map((image, index) => (
                        <div className="facility-card" key={`first-${index}`}>
                            <div className="card-image-wrapper">
                                <img src={image.src} alt={image.alt} />
                            </div>
                            <h3>{image.title}</h3>
                        </div>
                    ))}

                    {secondCarouselImages.map((image, index) => (
                        <div className="facility-card" key={`second-${index}`}>
                            <div className="card-image-wrapper">
                                <img src={image.src} alt={image.alt} />
                            </div>
                            <h3>{image.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section id="steyp" className="tech-section">
                <div className="tech-header">
                    <h2>Creating Computer Engineers & Tech Scientists</h2>
                </div>
                <div className="tech-content">
                    <img className="tech-ad" src={adImg} alt="Talrop Partnership" />
                    <a href="https://talrop.com" className="tech-button" target="_self" rel="noopener noreferrer">
                        Visit Talrop
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </section>

            <br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    );
};

export default AboutPage;