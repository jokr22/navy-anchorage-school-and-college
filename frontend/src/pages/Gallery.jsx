import { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get("/api/gallery");
        setGallery(response.data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        // Fallback data
        setGallery([
          {
            id: 1,
            title: "Classroom",
            image_url:
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "academic",
          },
          {
            id: 2,
            title: "Students",
            image_url:
              "https://images.unsplash.com/photo-1544531696-7613766a059d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "students",
          },
          {
            id: 3,
            title: "Education",
            image_url:
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "academic",
          },
          {
            id: 4,
            title: "Sports",
            image_url:
              "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "sports",
          },
          {
            id: 5,
            title: "Library",
            image_url:
              "https://images.unsplash.com/photo-1577896337318-2869d389e2a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "facilities",
          },
          {
            id: 6,
            title: "School Building",
            image_url:
              "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "campus",
          },
        ]);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Gallery</h1>
          <p>Capturing moments of learning and achievement</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Memories</span>
            <h2>Photo Gallery</h2>
            <p>Take a visual tour of our campus and activities</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image_url} alt={item.title} />
                <div className="gallery-overlay">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
