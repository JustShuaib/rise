import {useState} from "react";
import "./nav.css";
import Logo from "../assets/icons/logo";
import Hamburger from "../assets/icons/hamburger";
import Close from "../assets/icons/close";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };
  return (
    <nav className="navbar">
      <span className="logo">
        <Logo fill="#0898A0" />
      </span>
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
          <button className="get-started-btn btn btn-primary">
            Get started
          </button>
        </div>
      </div>

      <button className="hamburger-btn" onClick={handleOpenMenu}>
        {isOpen ? <Close fill="#0898A0" /> : <Hamburger />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul className="link-list">
          <li>
            <a href="https://www.risevest.com/why-rise">Why Rise</a>
          </li>
          <li>
            <a href="https://www.risevest.com/blog">Blog</a>
          </li>
          <li>
            <a href="https://www.risevest.com/rise-for-business">
              Rise for Business
            </a>
          </li>
        </ul>
        <ul className="auth-list">
          <li>
            <button className="login-btn">Log In</button>
          </li>
          <li>
            <button className="get-started-btn btn-primary">Get started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
