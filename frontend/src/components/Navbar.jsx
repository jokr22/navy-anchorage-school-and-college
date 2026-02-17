import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-anchor"></i>
            <span>Navy Anchorage</span>
            <span className="logo-accent">School & College</span>
          </div>

          <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
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
          </nav>

          <div className="header-cta">
            <Link to="/contact" className="btn btn-primary">
              Admission Open
            </Link>
          </div>

          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
