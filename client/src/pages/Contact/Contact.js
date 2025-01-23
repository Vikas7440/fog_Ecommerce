import React, { useState } from "react";
import { ContactStyle } from "./styles";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactStyle>
      <div className="contact-cover">
        <h1>Contact Us</h1>
      </div>
      <h2 className="get">
        Get In Touch With Us For More Information About Our Product & Services.
        Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help
        You Out. Do Not Hesitate!
      </h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <img src={location} alt="Location" />
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="info-item">
            <img src={phone} alt="Phone" />
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <div className="info-item">
            <img src={clock} alt="Working Time" />
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </ContactStyle>
  );
};

export default Contact;
