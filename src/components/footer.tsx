import AppStore from "../assets/icons/appStore";
import Facebook from "../assets/icons/facebook";
import GooglePlay from "../assets/icons/googlePlay";
import Instagram from "../assets/icons/instagram";
import LinkedIn from "../assets/icons/linkedin";
import Logo from "../assets/icons/logo";
import RightArrow from "../assets/icons/rightArrow";
import Twitter from "../assets/icons/twitter";
import Youtube from "../assets/icons/youtube";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <div>
          <p className="newsletter-title">Weekly newsletter</p>
          <p className="newsletter-desc">
            Sign up for our weekly newsletter for fun, finance and more
          </p>
        </div>
        <form className="newsletter-form">
          <div className="newsletter-form-name">
            <input
              type="text"
              placeholder="First name"
              required
              className="newsletter-first-name"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="newsletter-last-name"
            />
          </div>
          <div className="form-submission">
            <input
              type="email"
              required
              placeholder="Email address"
              className="newsletter-email"
            />
            <button aria-label="Subscribe to newsletter" type="submit">
              <RightArrow fill="#0898A0" />
            </button>
          </div>
        </form>
      </div>

      <div className="footer-content">
        <div className="company-info">
          <Logo fill="#EDFFFF" />
          <p>Global dollar investments made easy.</p>
          <img src="./assets/ndpr.png" alt="NDPR Data Compliant" />
        </div>

        <div className="footer-links company">
          <span>Company</span>
          <ul>
            <li>
              <a
                href="https://www.risevest.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links explore">
          <span>Explore</span>
          <ul>
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
                href="https://www.risevest.com/rise-for-business"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rise for Business
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/investment-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                Investment club
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer
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
          </ul>
        </div>

        <div className="footer-links legal">
          <span>Legal</span>
          <ul>
            <li>
              <a
                href="https://www.risevest.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Condition
              </a>
            </li>
            <li>
              <a
                href="https://www.risevest.com/disclosure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disclosure
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links contact-us">
          <span>Contact us</span>
          <ul>
            <li>
              <a
                href="tel:+234 01 888 3519"
                target="_blank"
                rel="noopener noreferrer"
              >
                +234 01 888 3519
              </a>
            </li>
            <li>
              <a
                href="tel:+234 01 888 3519"
                target="_blank"
                rel="noopener noreferrer"
              >
                +234 01 888 3519
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@risevest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@risevest.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <button className="download-btn">
            <AppStore fill="#fff" /> <span>|</span>
            <GooglePlay fill="#fff" stroke="#1C232B" />
            Download app
          </button>
          <button className="btn-outline">
            Start investing
            <span>
              <RightArrow fill="#fff" />
            </span>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copy-right">
          &copy; {new Date().getFullYear()} Risevest. All rights reserved.
        </span>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/rise-vest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/risevest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rise.vest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/RisevestGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/RiseCapital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
