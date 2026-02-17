import { useState, useEffect } from "react";
import axios from "axios";

function Facilities() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get("/api/facilities");
        setFacilities(response.data);
      } catch (error) {
        console.error("Error fetching facilities:", error);
        // Fallback data
        setFacilities([
          {
            id: 1,
            name: "Computer Lab",
            description:
              "Modern computer lab with high-speed internet and latest software for digital literacy.",
            icon: "fa-laptop-code",
          },
          {
            id: 2,
            name: "Science Lab",
            description:
              "Well-equipped physics, chemistry, and biology laboratories for practical learning.",
            icon: "fa-flask",
          },
          {
            id: 3,
            name: "Library",
            description:
              "Extensive collection of books, journals, and digital resources for comprehensive learning.",
            icon: "fa-book-reader",
          },
          {
            id: 4,
            name: "Sports Ground",
            description:
              "Spacious sports facilities for cricket, football, basketball, and other outdoor activities.",
            icon: "fa-futbol",
          },
          {
            id: 5,
            name: "Music & Art",
            description:
              "Dedicated spaces for creative arts, music lessons, and cultural activities.",
            icon: "fa-music",
          },
          {
            id: 6,
            name: "Transport",
            description:
              "Safe and reliable transportation services covering major areas of Chittagong.",
            icon: "fa-bus-school",
          },
        ]);
      }
    };
    fetchFacilities();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Facilities</h1>
          <p>Explore our world-class infrastructure</p>
        </div>
      </section>

      {/* Facilities Content */}
      <section className="facilities">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Infrastructure</span>
            <h2>World-Class Facilities</h2>
            <p>State-of-the-art facilities to support holistic development</p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility) => (
              <div key={facility.id} className="facility-card">
                <div className="facility-icon">
                  <i className={`fas ${facility.icon}`}></i>
                </div>
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Facilities;
