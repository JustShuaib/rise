import AppStore from "../assets/icons/appStore";
import GooglePlay from "../assets/icons/googlePlay";
import GreaterThan from "../assets/icons/greaterThan";
import RightArrow from "../assets/icons/rightArrow";
import "./header.css";
const Header = () => {
  return (
    <header>
      <section>
        <a
          href="http://www.risevest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cost-report"
        >
          Read our cost of living report 2024
          <span>
            <GreaterThan />
          </span>
        </a>
        <h1>
          Dollar investments <br /> that help you{" "}
          <span className="heading-span">grow.</span>
        </h1>
        <p>
          Rise gives you access to a carefully selected portfolio of <br />{" "}
          global investments, across US stocks, US real estate and <br /> fixed
          income assets.
        </p>
        <BtnGroup />
        <div className="partners">
          <p>Investors and Partners</p>
          <img src="./assets/partners.webp" alt="partners" />
        </div>
      </section>
      <div className="img-container">
        <img src="./assets/ball.webp" alt="Ball" className="top-ball" />
        <img src="./assets/phone.webp" alt="Phone" />
        <span className="rolling-ball-container">
          <img
            src="./assets/ball.webp"
            alt="Rolling ball"
            className="rolling-ball"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
const BtnGroup = () => (
  <div className="header-cta">
    <button className="btn-primary">
      Start investing
      <span>
        <RightArrow />
      </span>
    </button>
    <button className="btn-secondary cta-btn">
      <AppStore /> <span className="btn-delimiter">|</span>
      <GooglePlay />
      Download app
    </button>
  </div>
);

export {BtnGroup};
