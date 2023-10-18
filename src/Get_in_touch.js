import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs-com library


function Get_in_touch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Initialize EmailJS in useEffect hook
  useEffect(() => {
    emailjs.init("JcV5iPHNv8AMgB7Hq");
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Send email using EmailJS service
    emailjs.send("service_957rz0n", "template_7a4muam", {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).then(function(response) {
      alert('Message sent successfully!');
      // Clear the form after sending the message
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, function(error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div>
      <section className="container">
        <h2 className="header">GET IN TOUCH</h2>
        <p className="sub-header">
          Enter your name, email, and message in the form below. You will receive a response as soon as possible!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name* :</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

          <label htmlFor="email">Your Email* :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label htmlFor="message">Message* :</label>
          <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleInputChange} required></textarea>

          <button type="submit" className="btn">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Get_in_touch;
