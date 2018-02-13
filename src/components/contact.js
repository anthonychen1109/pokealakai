import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="contact-wrapper container">

      <div className="contact-info">
        <h2 className="contact-header">Poke Alakai</h2>
          <br />
            <p><strong>HOURS</strong></p>
            <p className="hours">
              Monday 11:00 AM to 10:00 PM
              <br />
              Tuesday 11:00 AM to 10:00 PM
              <br />
              Wednesday 11:00 AM to 10:00 PM
              <br />
              Thursday 11:00 AM to 10:00 PM
              <br />
              Friday 11:00 AM to 11:00 PM
              <br />
              Saturday 11:00 AM to 11:00 PM
              <br />
              Sunday 11:00 AM to 10:00 PM
            </p>
      </div>

      <div className="contact-location">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.4751776702556!2d-78.85664328466338!3d38.430491879645416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b4929699c4f029%3A0x6c9885c083863b6b!2s1645+Reservoir+St+%23135%2C+Harrisonburg%2C+VA+22801!5e0!3m2!1sen!2sus!4v1518553772487"
        height="300px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>

      <div className="contact-info">
          <br />
          <p>
            <strong>
              1645 Reservoir St, Ste 135,
            <br />
              Harrisonburg, VA 22801
            </strong>
          </p>
          <br />
          <p><strong>Phone</strong></p>
          <p>540-615-5694</p>
          <br />
          <p><strong>Fax</strong></p>
          <p>540-615-5194</p>
      </div>

    </div>
    </div>
  </div>

export default Contact;
