import { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [schoolInfo, setSchoolInfo] = useState(null);

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      try {
        const response = await axios.get("/api/school");
        setSchoolInfo(response.data);
      } catch (error) {
        console.error("Error fetching school info:", error);
      }
    };
    fetchSchoolInfo();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Learn more about Navy Anchorage School And College Chattogram</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Story</span>
            <h2>Building Future Leaders Since 2014</h2>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Navy Anchorage School"
              />
            </div>
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                {schoolInfo?.mission ||
                  "To provide quality education that combines academic excellence with character development."}
              </p>
              <h3>Our Vision</h3>
              <p>
                {schoolInfo?.vision ||
                  "To nurture young minds with a perfect blend of traditional values and modern educational approaches."}
              </p>
              <h3>Who We Are</h3>
              <p>
                {schoolInfo?.description ||
                  "One of the best schools in Chittagong providing quality English medium education with a focus on holistic development."}
              </p>
              <p>
                In response to the growing demand of English Medium School in
                Chittagong area, Navy Anchorage Chittagong started its journey
                with a vision to provide quality education that combines
                academic excellence with character development.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Quality Education</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Experienced Teachers</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Modern Facilities</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Student Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
