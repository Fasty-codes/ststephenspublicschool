import { useState } from "react";
import "./Header.css";
import logo from '../../assets/images/logo.jpeg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="St. Stephen's Public School Logo" className="logo-img" />
          <div className="logo-text">
            <h1>St. Stephen's Public School</h1>
            <p className="logo-subtitle">& Junior College, Kudassanad</p>
          </div>
        </div>

        {/* Desktop Navigation - Only visible on large screens */}
        <ul className="nav-links desktop-nav">
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="About" onClick={closeMenu}>About</a></li>
          <li><a href="Admission" onClick={closeMenu}>Admissions</a></li>
          <li><a href="Gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="Contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
        </div>

        {/* Mobile Navigation - Only visible on small screens */}
        <ul className={`nav-links mobile-nav ${isOpen ? "open" : ""}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="About" onClick={closeMenu}>About</a></li>
          <li><a href="Admission" onClick={closeMenu}>Admissions</a></li>
          <li><a href="Gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;