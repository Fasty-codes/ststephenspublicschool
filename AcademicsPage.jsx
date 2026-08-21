// import React, { useState, useEffect } from 'react';
// import './AcademicsPage.css';
// import { FaBook, FaChild, FaGraduationCap, FaSchool, FaUniversity, FaFlask, FaCalendarAlt, FaChevronDown, FaArrowRight, FaCheckCircle, FaDownload, FaClock } from 'react-icons/fa';
// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';

// // Using existing images from your project
// import curriculumImg from '../assets/images/slide9.jpg';
// import prePrimaryImg from '../assets/images/children.png';
// import primaryImg from '../assets/images/classimage.png';
// import middleImg from '../assets/images/slide14.png';
// import secondaryImg from '../assets/images/slide31.png';
// import seniorSecondaryImg from '../assets/images/slide41.jpg';
// import examImg from '../assets/images/slide21.jpg';

// const AcademicsPage = () => {
//   const [activeTab, setActiveTab] = useState('curriculum');
//   const [expandedSection, setExpandedSection] = useState(null);

//   const sections = [
//     {
//       id: 'curriculum',
//       icon: <FaBook />,
//       title: 'Curriculum',
//       subtitle: 'CBSE Curriculum Details & Subjects Offered',
//       image: curriculumImg,
//       content: {
//         description: 'St. Stephen\'s Public School follows the Central Board of Secondary Education (CBSE) curriculum, designed to provide a balanced and comprehensive education that prepares students for higher education and life beyond school.',
//         highlights: [
//           'CBSE Affiliated (Affiliation No: 930456)',
//           'English Medium Instruction',
//           'NEP 2020 Aligned Curriculum',
//           'Continuous and Comprehensive Evaluation (CCE)',
//           'Activity-Based Learning Approach',
//           'Integration of Technology in Teaching'
//         ],
//         subjects: {
//           'Pre-Primary': ['English', 'Mathematics', 'Environmental Studies', 'Art & Craft', 'Music', 'Physical Education'],
//           'Primary (1-5)': ['English', 'Hindi/Malayalam', 'Mathematics', 'Environmental Studies', 'Computer Science', 'Art Education', 'Physical Education'],
//           'Middle (6-8)': ['English', 'Hindi/Malayalam', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Sanskrit', 'Art Education', 'Physical Education'],
//           'Secondary (9-10)': ['English', 'Hindi/Malayalam', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'Computer Applications', 'Physical Education'],
//           'Senior Secondary (11-12)': ['Science Stream: Physics, Chemistry, Mathematics, Biology', 'Commerce Stream: Accountancy, Business Studies, Economics', 'Humanities Stream: History, Political Science, Geography']
//         }
//       }
//     },
//     {
//       id: 'preprimary',
//       icon: <FaChild />,
//       title: 'Pre-Primary Section',
//       subtitle: 'Nursery, LKG & UKG',
//       image: prePrimaryImg,
//       content: {
//         description: 'Our Pre-Primary section provides a nurturing and stimulating environment for young learners aged 3-5 years. We focus on holistic development through play-based learning.',
//         highlights: [
//           'Age Group: 3-5 Years',
//           'Play-Based Learning Methodology',
//           'Montessori-Inspired Activities',
//           'Low Student-Teacher Ratio (15:1)',
//           'Focus on Fine & Gross Motor Skills',
//           'Safe and Colorful Learning Environment'
//         ],
//         activities: [
//           'Storytelling Sessions',
//           'Art & Craft Activities',
//           'Music and Movement',
//           'Outdoor Play',
//           'Rhymes and Songs',
//           'Sensory Activities',
//           'Phonics Introduction',
//           'Basic Number Concepts'
//         ]
//       }
//     },
//     {
//       id: 'primary',
//       icon: <FaSchool />,
//       title: 'Primary Section',
//       subtitle: 'Classes 1 to 5',
//       image: primaryImg,
//       content: {
//         description: 'The Primary section (Classes 1-5) builds strong foundations in core subjects while developing critical thinking, creativity, and social skills.',
//         highlights: [
//           'Age Group: 6-10 Years',
//           'Interactive Learning Methods',
//           'Project-Based Activities',
//           'Regular Assessments',
//           'Reading Programs',
//           'Co-Curricular Activities'
//         ],
//         subjects: [
//           'English',
//           'Second Language (Hindi/Malayalam)',
//           'Mathematics',
//           'Environmental Studies',
//           'Computer Science',
//           'Art Education',
//           'Physical Education',
//           'Value Education'
//         ]
//       }
//     },
//     {
//       id: 'middle',
//       icon: <FaGraduationCap />,
//       title: 'Middle School',
//       subtitle: 'Classes 6 to 8',
//       image: middleImg,
//       content: {
//         description: 'Middle School (Classes 6-8) focuses on developing analytical thinking, scientific temperament, and independent learning skills.',
//         highlights: [
//           'Age Group: 11-13 Years',
//           'Subject Specialization Begins',
//           'Laboratory Exposure',
//           'Research and Project Work',
//           'Personality Development',
//           'Leadership Opportunities'
//         ],
//         subjects: [
//           'English',
//           'Second Language (Hindi/Malayalam)',
//           'Third Language (Sanskrit)',
//           'Mathematics',
//           'Science',
//           'Social Science',
//           'Computer Science',
//           'Art Education',
//           'Physical Education',
//           'Life Skills'
//         ]
//       }
//     },
//     {
//       id: 'secondary',
//       icon: <FaFlask />,
//       title: 'Secondary Section',
//       subtitle: 'Classes 9 & 10',
//       image: secondaryImg,
//       content: {
//         description: 'The Secondary section (Classes 9-10) prepares students for the CBSE Board Examinations with rigorous academic training and comprehensive support.',
//         highlights: [
//           'Age Group: 14-15 Years',
//           'CBSE Board Exam Preparation',
//           'Regular Mock Tests',
//           'Remedial Classes',
//           'Career Guidance',
//           'Study Skills Development'
//         ],
//         subjects: [
//           'English (Language & Literature)',
//           'Second Language (Hindi/Malayalam)',
//           'Mathematics (Standard/Basic)',
//           'Science (Physics, Chemistry, Biology)',
//           'Social Science',
//           'Computer Applications',
//           'Physical Education',
//           'Art Education'
//         ]
//       }
//     },
//     {
//       id: 'seniorsecondary',
//       icon: <FaUniversity />,
//       title: 'Senior Secondary',
//       subtitle: 'Classes 11 & 12 - Streams Offered',
//       image: seniorSecondaryImg,
//       content: {
//         description: 'Senior Secondary (Classes 11-12) offers specialized streams to prepare students for higher education and professional careers.',
//         highlights: [
//           'Age Group: 16-17 Years',
//           'Three Streams Available',
//           'Expert Faculty',
//           'Competitive Exam Coaching',
//           'Career Counseling',
//           'Internship Opportunities'
//         ],
//         streams: [
//           {
//             name: 'Science Stream',
//             subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English']
//           },
//           {
//             name: 'Commerce Stream',
//             subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English']
//           },
//           {
//             name: 'Humanities Stream',
//             subjects: ['History', 'Political Science', 'Geography', 'Economics', 'English']
//           }
//         ]
//       }
//     },
//     {
//       id: 'examination',
//       icon: <FaCheckCircle />,
//       title: 'Examination System',
//       subtitle: 'Assessment Pattern & Schedule',
//       image: examImg,
//       content: {
//         description: 'Our examination system follows the CBSE pattern with Continuous and Comprehensive Evaluation to ensure holistic assessment.',
//         highlights: [
//           'Periodic Tests (PT)',
//           'Term Examinations',
//           'Pre-Board Examinations',
//           'Practical Examinations',
//           'Internal Assessment',
//           'Project Work Evaluation'
//         ],
//         schedule: [
//           { term: 'Periodic Test 1', months: 'April - May', weightage: '10%' },
//           { term: 'Term 1 Examination', months: 'September', weightage: '40%' },
//           { term: 'Periodic Test 2', months: 'November - December', weightage: '10%' },
//           { term: 'Term 2 Examination', months: 'February - March', weightage: '40%' }
//         ]
//       }
//     },
//     {
//       id: 'calendar',
//       icon: <FaCalendarAlt />,
//       title: 'Academic Calendar',
//       subtitle: 'Yearly Schedule, Holidays & Events',
//       image: curriculumImg,
//       content: {
//         description: 'The academic year runs from June to March, with well-planned schedules for academics, activities, and holidays.',
//         highlights: [
//           'Academic Year: June 2025 - March 2026',
//           'Two Terms System',
//           'Regular Holidays & Breaks',
//           'Annual Events',
//           'Sports Meet',
//           'Cultural Programs'
//         ],
//         terms: [
//           { term: 'First Term', period: 'June - September', events: ['School Reopening', 'Independence Day', 'Onam Celebration', 'Term 1 Exams'] },
//           { term: 'Second Term', period: 'October - March', events: ['Annual Sports Day', 'Christmas Celebration', 'Republic Day', 'Annual Day', 'Term 2 Exams'] }
//         ]
//       }
//     }
//   ];

//   const activeSection = sections.find(s => s.id === activeTab);

//   return (
//     <div className="academics-page">
//       <Header />

//       {/* Hero Section */}
//       <section className="acad-hero">
//         <div className="acad-hero-overlay"></div>
//         <div className="acad-hero-content">
//           <span className="acad-hero-eyebrow">Academic Excellence</span>
//           <h1 className="acad-hero-title">Our Academic Programs</h1>
//           <p className="acad-hero-sub">Comprehensive CBSE curriculum from Pre-Nursery to Senior Secondary, nurturing young minds for a bright future</p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="acad-main">
//         <div className="acad-container">
//           {/* Tab Navigation */}
//           <div className="acad-tabs">
//             {sections.map(section => (
//               <button
//                 key={section.id}
//                 className={`acad-tab ${activeTab === section.id ? 'active' : ''}`}
//                 onClick={() => setActiveTab(section.id)}
//               >
//                 <span className="acad-tab-icon">{section.icon}</span>
//                 <span className="acad-tab-text">{section.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Active Section Content */}
//           <div className="acad-content">
//             <div className="acad-content-header">
//               <div className="acad-content-info">
//                 <span className="acad-content-icon">{activeSection.icon}</span>
//                 <div>
//                   <h2 className="acad-content-title">{activeSection.title}</h2>
//                   <p className="acad-content-subtitle">{activeSection.subtitle}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="acad-content-body">
//               <div className="acad-description">
//                 <p>{activeSection.content.description}</p>
//               </div>

//               {/* Highlights */}
//               <div className="acad-highlights">
//                 <h3>Key Highlights</h3>
//                 <ul className="acad-highlight-list">
//                   {activeSection.content.highlights.map((highlight, index) => (
//                     <li key={index}>
//                       <FaCheckCircle className="acad-check-icon" />
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Subjects */}
//               {activeSection.content.subjects && (
//                 <div className="acad-subjects">
//                   <h3>Subjects Offered</h3>
//                   <div className="acad-subjects-grid">
//                     {Object.entries(activeSection.content.subjects).map(([level, subjects]) => (
//                       <div key={level} className="acad-subject-card">
//                         <h4>{level}</h4>
//                         <ul>
//                           {subjects.map((subject, idx) => (
//                             <li key={idx}>{subject}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Streams */}
//               {activeSection.content.streams && (
//                 <div className="acad-streams">
//                   <h3>Available Streams</h3>
//                   <div className="acad-streams-grid">
//                     {activeSection.content.streams.map((stream, index) => (
//                       <div key={index} className="acad-stream-card">
//                         <h4>{stream.name}</h4>
//                         <ul>
//                           {stream.subjects.map((subject, idx) => (
//                             <li key={idx}>{subject}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Examination Schedule */}
//               {activeSection.content.schedule && (
//                 <div className="acad-schedule">
//                   <h3>Examination Schedule</h3>
//                   <div className="acad-schedule-table">
//                     <table>
//                       <thead>
//                         <tr>
//                           <th>Examination</th>
//                           <th>Months</th>
//                           <th>Weightage</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {activeSection.content.schedule.map((item, index) => (
//                           <tr key={index}>
//                             <td>{item.term}</td>
//                             <td>{item.months}</td>
//                             <td>{item.weightage}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}

//               {/* Academic Calendar */}
//               {activeSection.content.terms && (
//                 <div className="acad-terms">
//                   <h3>Academic Year Structure</h3>
//                   <div className="acad-terms-grid">
//                     {activeSection.content.terms.map((term, index) => (
//                       <div key={index} className="acad-term-card">
//                         <h4>{term.term}</h4>
//                         <p className="acad-term-period">{term.period}</p>
//                         <ul className="acad-term-events">
//                           {term.events.map((event, idx) => (
//                             <li key={idx}>
//                               <FaClock className="acad-event-icon" />
//                               <span>{event}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Activities for Pre-Primary */}
//               {activeSection.content.activities && (
//                 <div className="acad-activities">
//                   <h3>Learning Activities</h3>
//                   <div className="acad-activities-grid">
//                     {activeSection.content.activities.map((activity, index) => (
//                       <div key={index} className="acad-activity-item">
//                         <span className="acad-activity-dot"></span>
//                         <span>{activity}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* CTA Button */}
//               <div className="acad-cta">
//                 <a href="/admission" className="acad-cta-btn">
//                   Apply for Admission <FaArrowRight />
//                 </a>
//                 <a href="/contact" className="acad-cta-secondary">
//                   Contact Academic Office
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links Section */}
//       <section className="acad-quick-links">
//         <div className="acad-container">
//           <h2 className="acad-quick-title">Quick Resources</h2>
//           <div className="acad-quick-grid">
//             <a href="/downloads" className="acad-quick-card">
//               <FaDownload className="acad-quick-icon" />
//               <h3>Download Syllabus</h3>
//               <p>Get class-wise syllabus PDFs</p>
//             </a>
//             <a href="/admission" className="acad-quick-card">
//               <FaGraduationCap className="acad-quick-icon" />
//               <h3>Admission Process</h3>
//               <p>Learn about our admission procedure</p>
//             </a>
//             <a href="/faculty" className="acad-quick-card">
//               <FaSchool className="acad-quick-icon" />
//               <h3>Our Faculty</h3>
//               <p>Meet our experienced teachers</p>
//             </a>
//             <a href="/gallery" className="acad-quick-card">
//               <FaCalendarAlt className="acad-quick-icon" />
//               <h3>School Events</h3>
//               <p>View our academic and cultural events</p>
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AcademicsPage;