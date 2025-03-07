import RightArrow from "../assets/icons/rightArrow";
import "./offerings.css";
const Offerings = () => {
  return (
    <div className="offerings-container">
      <div className="portfolio-container stock-portfolio">
        <div className="container portfolio-content">
          <h2>We bring the world’s best companies to you. </h2>
          <p>
            The Rise stock portfolio is a selection of stocks of the world’s
            most profitable companies, curated by experts to deliver great long
            term returns.
          </p>
          <button className="btn-light">
            Create a stock plan now
            <span>
              <RightArrow fill="#171C22" />
            </span>
          </button>
        </div>
        <div className="portfolio-img">
          <img src="./assets/stock-portfolio.png" alt="" />
        </div>
      </div>

      <div className="portfolio-container investment-portfolio">
        <div className="container portfolio-content">
          <h2>We offer diverse investment options. </h2>
          <p>
            Our real estate offering is a portfolio of rental properties in the
            US that provide steady monthly returns, price appreciation and
            capital gains. Your investments are more stable and protect you from
            market declines.
          </p>
          <button className="btn-light">
            Create a real estate plan now
            <span>
              <RightArrow fill="#171C22" />
            </span>
          </button>
        </div>
        <div className="portfolio-img">
          <img src="./assets/investment-portfolio.png" alt="" />
        </div>
      </div>

      <div className="portfolio-container fixed-income">
        <div className="container portfolio-content">
          <h2>There’s something for everyone.</h2>
          <p>
            Looking for stable and safe returns? Our fixed-income portfolio
            delivers consistent returns annually and is perfect for low-risk
            investors
          </p>
          <button className="btn-light">
            Create a fixed-income plan now
            <span>
              <RightArrow fill="#171C22" />
            </span>
          </button>
        </div>
        <div className="portfolio-img">
          <img src="./assets/fixed-income.png" alt="" />
        </div>
      </div>

      <div className="portfolio-container goal-based">
        <div className="container portfolio-content">
          <h2>Invest toward your goals.</h2>
          <p>
            Rise gives you the ability to choose a financial goal, whether
            tuition, a wedding, travel or retirement and put money away
            regularly toward them.
          </p>
          <button className="btn-light">
            Explore our goal based plans
            <span>
              <RightArrow fill="#171C22" />
            </span>
          </button>
        </div>
        <div className="portfolio-img">
          <img src="./assets/goal-based.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offerings;
