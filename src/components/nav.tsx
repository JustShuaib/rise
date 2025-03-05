import {useState} from "react";
import "./nav.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        rise<sup>•</sup>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links">
        <a href="#">Why Rise</a>
        <a href="#">Blog</a>
        <a href="#">Rise for Business</a>
      </div>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        <button className="login-btn">Log In</button>
        <button className="get-started-btn">Get started</button>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="#">Why Rise</a>
        <a href="#">Blog</a>
        <a href="#">Rise for Business</a>
        <button className="login-btn">Log In</button>
        <button className="get-started-btn">Get started</button>
      </div>
    </nav>
  );
};

export default Navigation;
