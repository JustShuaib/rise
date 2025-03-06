import {useState} from "react";
import "./nav.css";
import Logo from "../assets/icons/logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Logo fill="#0898A0" />
      <div className="nav-link-container">
        <ul className="nav-links">
          <li>
            <a
              href="https://www.risevest.com/why-rise"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why rise
            </a>
          </li>
          <li>
            <a
              href="https://www.risevest.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://www.risevest.com/rise-for-business"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rise for Business
            </a>
          </li>
        </ul>

        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="get-started-btn btn btn-primary">Get started</button>
        </div>
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
