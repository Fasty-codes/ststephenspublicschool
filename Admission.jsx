import React from 'react';
// import React, { useState } from 'react';
import './Admission.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function Admission() {
  return (
    // <div className="admission-page">
    //   <Header />

    //   <iframe className='admission-iframe' src="https://forms.gle/GCsZaL35EWQDJ4N77" width="1000" height="620"></iframe>
    //   <p className='admission-p'>If you can't get the form, go to <a className='admission-link' href="https://docs.google.com/forms/d/e/1FAIpQLScgtp1YSvDFjfZ9uQrw9y8Tkk5RJyj54Jrzoawz200jfCOjRw/viewform" >Admission Form</a></p>

    //   <Footer />
    // </div>

    <div className="admission-page">
  <Header />
  
  <div className="iframe-container">
    <iframe 
      className='admission-iframe' 
      src="https://forms.gle/GCsZaL35EWQDJ4N77" 
      title="Admission Form"
    ></iframe>
  </div>
  
  <p className='admission-p'>
    If you can't get the form, go to {' '}
    <a className='admission-link' href="https://docs.google.com/forms/d/e/1FAIpQLScgtp1YSvDFjfZ9uQrw9y8Tkk5RJyj54Jrzoawz200jfCOjRw/viewform">
      Admission Form
    </a>
  </p>

  <Footer />
</div>
  );
};

export default Admission;