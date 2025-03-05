import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h3>Weekly newsletter</h3>
        <p>Sign up for our weekly newsletter for fun, finance and more</p>
        <div className="newsletter-form">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email address" />
          <button>→</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="company-info">
          <h2>
            rise<sup>•</sup>
          </h2>
          <p>Global dollar investments made easy.</p>
          <img src="/path-to-qr-code.png" alt="Download QR Code" />
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#">Why Rise</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Download app</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Disclosures</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact us</h4>
            <ul>
              <li>+234 908 206 2299</li>
              <li>+234 908 206 2299</li>
              <li>hello@risevest.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Downloads */}
      <div className="footer-bottom">
        <div className="download-buttons">
          <button>Download app</button>
          <button>Start investing →</button>
        </div>
        <div className="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
