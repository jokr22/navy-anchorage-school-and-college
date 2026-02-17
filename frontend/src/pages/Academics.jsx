import { useState, useEffect } from "react";
import axios from "axios";

function Academics() {
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        const response = await axios.get("/api/academics");
        setAcademics(response.data);
      } catch (error) {
        console.error("Error fetching academics:", error);
        // Fallback data
        setAcademics([
          {
            id: 1,
            title: "Primary Section",
            description:
              "Building strong foundations with interactive learning methods for young minds aged 5-11 years.",
            age_range: "5-11 years",
            features: [
              "Playgroup to Class 5",
              "Interactive Learning",
              "Activity-Based Education",
              "Basic Skills Development",
            ],
          },
          {
            id: 2,
            title: "Secondary Section",
            description:
              "Comprehensive education for students aged 12-16 years preparing for SSC examinations.",
            age_range: "12-16 years",
            features: [
              "Class 6 to Class 10",
              "Science & Business Tracks",
              "Exam Preparation",
              "Character Building",
            ],
          },
          {
            id: 3,
            title: "Higher Secondary",
            description:
              "Advanced education for students aged 17-18 years preparing for HSC examinations.",
            age_range: "17-18 years",
            features: [
              "Class 11 to Class 12",
              "Science & Business Studies",
              "University Preparation",
              "Career Guidance",
            ],
          },
        ]);
      }
    };
    fetchAcademics();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Academics</h1>
          <p>Discover our comprehensive academic programs</p>
        </div>
      </section>

      {/* Academics Content */}
      <section className="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Programs</span>
            <h2>Academic Programs</h2>
            <p>
              Comprehensive education from primary to higher secondary level
            </p>
          </div>
          <div className="academics-grid">
            {academics.map((academic) => (
              <div key={academic.id} className="academic-card">
                <div className="academic-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>{academic.title}</h3>
                <p>{academic.description}</p>
                {academic.age_range && (
                  <p>
                    <strong>Age Range:</strong> {academic.age_range}
                  </p>
                )}
                {academic.features && academic.features.length > 0 && (
                  <ul className="academic-features">
                    {academic.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Academics;
