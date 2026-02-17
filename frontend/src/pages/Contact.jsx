import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    className: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await axios.post("/api/inquiries", formData);
      setStatus("success");
      setFormData({
        parentName: "",
        studentName: "",
        email: "",
        phone: "",
        className: "",
        message: "",
      });
      alert("Thank you for your inquiry! We will contact you soon.");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setStatus("error");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for admissions and inquiries</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2>Contact Us</h2>
            <p>
              Have questions? We'd love to hear from you. Send us a message!
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>Sailors Colony 2 Road, Chattogram 4218, Bangladesh</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+880 1769-722782</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@nascc.edu.bd</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-details">
                  <h4>Website</h4>
                  <p>nascc.edu.bd</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-details">
                  <h4>Office Hours</h4>
                  <p>Sunday - Thursday: 9 AM - 4 PM</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="Parent's Name"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    placeholder="Student's Name"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    id="className"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="playgroup">Playgroup</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                    <option value="class4">Class 4</option>
                    <option value="class5">Class 5</option>
                    <option value="class6">Class 6</option>
                    <option value="class7">Class 7</option>
                    <option value="class8">Class 8</option>
                    <option value="class9">Class 9</option>
                    <option value="class10">Class 10</option>
                    <option value="class11">Class 11</option>
                    <option value="class12">Class 12</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
