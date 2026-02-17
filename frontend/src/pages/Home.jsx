import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchoolInfo = async () => {
      try {
        const response = await axios.get("/api/school");
        setSchoolInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching school info:", error);
        setLoading(false);
      }
    };
    fetchSchoolInfo();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to Navy Anchorage</span>
          <h1>Shaping Future Leaders With Excellence in Education</h1>
          <p>
            One of the best schools in Chittagong providing quality English
            medium education with a focus on holistic development. Join us to
            nurture your child's potential in a supportive and encouraging
            environment.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">
              Apply Now
            </a>
            <a href="/about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">
                {schoolInfo?.review_count || "107"}+
              </span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{schoolInfo?.rating || "4.1"}</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Us</span>
            <h2>Excellence in Education</h2>
            <p>
              Building a brighter future through quality education and holistic
              development
            </p>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Navy Anchorage School"
              />
            </div>
            <div className="about-text">
              <h3>Our Journey</h3>
              <p>
                In response to the growing demand of English Medium School in
                Chittagong area, Navy Anchorage Chittagong started its journey
                with a vision to provide quality education that combines
                academic excellence with character development.
              </p>
              <p>
                We believe in nurturing young minds with a perfect blend of
                traditional values and modern educational approaches. Our
                dedicated faculty members are committed to guiding students
                towards success in every aspect of life.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>English Medium Education</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Experienced Faculty</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Holistic Development</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Supportive Environment</span>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
