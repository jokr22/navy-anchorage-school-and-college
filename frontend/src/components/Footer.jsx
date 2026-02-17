import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <i className="fas fa-anchor"></i>
              <span>Navy Anchorage</span>
              <span className="logo-accent">School & College</span>
            </div>
            <p>
              One of the best schools in Chittagong providing quality English
              medium education with a focus on holistic development and
              character building.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/academics">Academics</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Academics</h4>
            <ul>
              <li>
                <Link to="/academics">Primary Section</Link>
              </li>
              <li>
                <Link to="/academics">Secondary Section</Link>
              </li>
              <li>
                <Link to="/academics">Higher Secondary</Link>
              </li>
              <li>
                <Link to="/contact">Admission</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>Sailors Colony 2 Road</li>
              <li>Chattogram 4218, Bangladesh</li>
              <li>+880 1769-722782</li>
              <li>info@nascc.edu.bd</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Shubo Das. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
