import Footer from "./components/footer";
import Navbar from "./components/nav";
import "./App.css";
import RightArrow from "./assets/icons/rightArrow";
import MeetRisers from "./components/meetRisers";
import StartInvesting from "./components/startInvesting";
import Header, {BtnGroup} from "./components/header";
import Offerings from "./components/offerings";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Header />
        <MeetRisers />
        <StartInvesting />
        <section>
          <h2 className="center-heading">
            See our <span className="heading-span">numbers</span>
          </h2>
          <ul className="numbers-row">
            <li>
              <span className="content">600k +</span>
              <span className="desc">Users</span>
            </li>
            <li>
              <span className="content">$42m +</span>
              <span className="desc">Paid out to users</span>
            </li>
            <li>
              <span className="content content-with-img">
                5
                <img
                  src="./assets/countries.webp"
                  alt="countries risevest operate in"
                  loading="lazy"
                />
              </span>
              <span className="desc">Countries</span>
            </li>
          </ul>
        </section>
        <Offerings />
        <div className="flex-container">
          <img src="./assets/rise-wallet.png" alt="" />
          <div className="container">
            <h2>
              Make transactions online with{" "}
              <span className="heading-span">ease</span>
            </h2>
            <p>
              With the Rise US virtual card, you can pay for your subscriptions,
              shop online and enjoy a monthly transaction limit of up to
              $10,000.
            </p>
            <button className="btn-light">
              Request for your US virtual card
              <span>
                <RightArrow fill="#0898A0" />
              </span>
            </button>
          </div>
        </div>
        <div className="expert-container">
          <h2>
            Meet the <br />
            <span className="heading-span">Experts</span>
          </h2>
          <ul className="expert-content">
            <li className="expert-item">
              <img src="./assets/eke.png" alt="Eke" />
              <p>Eke Urum</p>
              <span>Founder & CEO</span>
            </li>
            <li className="expert-item">
              <img src="./assets/sheriff.png" alt="Sheriff" />
              <p>Sheriff Adeoti</p>
              <span>Finance Lead</span>
            </li>
            <li className="expert-item">
              <img src="./assets/damilare.png" alt="Damilare" />
              <p>Damilare Akinlotan</p>
              <span>Finance</span>
            </li>
          </ul>
        </div>
        <div className="blog-container flex-container">
          <section className="blog-content">
            <h3>
              Get smarter about <br /> your money.
            </h3>
            <p>
              The latest news, market insight and everything you need to know
              about managing your money.
            </p>
            <button className="btn-primary">
              Read the blog
              <span>
                <RightArrow />
              </span>
            </button>
          </section>
          <div className="divider"></div>
          <ul className="blog-content">
            {stories.map((story, index) => (
              <li key={index}>
                <a
                  href="https://www.risevest.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-item"
                >
                  <img src={story.img} alt={story.title} />
                  <p className="blog-text">
                    <span className="blog-title">{story.title}</span>
                    <span className="blog-desc">{story.desc}</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="community-container">
          <p className="community-title">Join the Rise Community</p>
          <p className="community-desc">
            Our Telegram community surrounds you with others who can help you
            along your financial journey with tips, advice and learning. It's
            completely free and open to new and seasoned investors.
          </p>
          <button className="btn-outline">
            Join our community
            <span>
              <RightArrow fill="#FFFFFF" />
            </span>
          </button>
        </div>
        <div className="download-container">
          <div className="download-text-container">
            <p className="download-copy">Download The Rise App</p>
            <p className="download-title">Rise makes investing simple.</p>
            <BtnGroup />
          </div>
          <div className="download-img-container">
            <img src="./assets/download-app.png" alt="" />
            <img src="./assets/ball.webp" alt="" width={240} className="ball" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
const stories = [
  {
    img: "./assets/may-report.png",
    title: "May Portfolio Report",
    desc: "Rise has added YouTube to it’s stocks portfolio growth",
  },
  {
    img: "./assets/user-stories.png",
    title: "User stories",
    desc: "Rise has added YouTube to it’s stocks portfolio growth",
  },
  {
    img: "./assets/updates.png",
    title: "Updates",
    desc: "Rise has added YouTube to it’s stocks portfolio growth",
  },
];
