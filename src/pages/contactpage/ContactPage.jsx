import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./contactpage.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hc596bg", // Replace with your EmailJS service ID
        "template_6m01auj", // Replace with your EmailJS template ID
        e.target, // Form element
        "PzaEu44muYBXOf0to" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setFormSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
    // Add form submission logic here
  };

  const formAnimation = useSpring({
    opacity: formSubmitted ? 0 : 1,
    transform: formSubmitted ? "translateY(-20px)" : "translateY(0px)",
  });

  const contactDetailsAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="contact-us-page">
      <section className="contact-details">
        <animated.div
          style={contactDetailsAnimation}
          className="details-container"
        >
          <animated.div style={fadeIn} className="colorful-bar-contact">
            <h1>CONTACT US</h1>
          </animated.div>
          <p>
            <strong>Address:</strong> Habarana Road, Dambulla, Sri Lanka
          </p>
          <p>
            <strong>Phone:</strong> +94 72 6001 919 / +94 66 2000 200
          </p>
          <p>
            <strong>Email:</strong> aquabloomfishfarm@gmail.com
          </p>
        </animated.div>
      </section>

      <section className="contact-form">
        <animated.form
          style={formAnimation}
          onSubmit={handleSubmit}
          className="form-container"
        >
          <h2> Message</h2>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </animated.form>
      </section>

      {formSubmitted && (
        <div className="thank-you-message">
          <h2>Thank you for reaching out!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
