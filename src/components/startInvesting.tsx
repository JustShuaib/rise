import {useRef, useEffect} from "react";
import RightArrow from "../assets/icons/rightArrow";
import "./startInvesting.css";
const StartInvesting = () => {
  const slideInImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const slideInImage = slideInImageRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (slideInImage) {
      observer.observe(slideInImage);
    }

    return () => {
      if (slideInImage) {
        observer.unobserve(slideInImage);
      }
    };
  }, []);

  return (
    <div className="padding-container">
      <div className="investment-container">
        <section className="investment-section">
          <h2>
            Easy. Diversified. Managed by <br />
            <span className="heading-span">Experts.</span>
          </h2>
          <p>
            Explore an array of investment options that offer superior returns,
            curated and managed by experts, all from the comfort of your device.
            Simple, right?
          </p>
          <button type="button" className="btn-primary">
            Start investing
            <span>
              <RightArrow />
            </span>
          </button>
        </section>
        <div className="img-container">
          <img
            src="./assets/iphone.png"
            alt="Invest with rise"
            ref={slideInImageRef}
          />
        </div>
      </div>
    </div>
  );
};

export default StartInvesting;
