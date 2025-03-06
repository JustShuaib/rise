import {useState} from "react";
import Close from "../assets/icons/close";
import Play from "../assets/icons/play";
import "./meetRisers.css";

const risers = [
  {
    name: "Sanni",
    ball: "./assets/teal-ball.png",
    thumbnail: "./assets/riser-sanni.jpg",
    video:
      "https://res.cloudinary.com/dsjxfieim/video/upload/v1699238923/RiseSanni2_blq2zz.mp4",
  },
  {
    name: "Layo",
    ball: "./assets/pink-ball.png",
    ballPosition: {top: 0, right: 0},
    thumbnail: "./assets/riser-layo.jpg",
    video:
      "https://res.cloudinary.com/dsjxfieim/video/upload/v1699239069/RiseLayo2_zwrhzy.mp4",
  },
  {
    name: "Henry",
    ball: "./assets/purple-ball.png",
    ballPosition: {bottom: 0, right: 0},
    thumbnail: "./assets/riser-henry.jpg",
    video:
      "https://res.cloudinary.com/dsjxfieim/video/upload/v1698851653/RiseHenry_d0akwz.mp4",
  },
];

const MeetRisers = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const handleModal = (name: string) => {
    document.body.classList.add("no-scroll");
    document.querySelector(".modal")!.classList.add("modal-visible");
    setVideoUrl(name);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("no-scroll");
    document.querySelector(".modal")!.classList.remove("modal-visible");
    setVideoUrl(null);
  };
  return (
    <section className="meet-risers">
      <h2>
        Meet Some <span className="heading-span">Rise Users</span>
      </h2>
      <div className="risers-container">
        {risers.map((riser, index) => (
          <div
            key={index}
            style={{backgroundImage: `url(${riser.thumbnail})`}}
            className="riser-card"
          >
            <img
              src={riser.ball}
              className="teal-ball"
              style={{position: "absolute", ...riser.ballPosition}}
              alt=""
            />
            <button
              className="play-button"
              onClick={() => handleModal(riser.video)}
            >
              <span className="play-button-icon">
                <Play />
              </span>
            </button>
            <p className="riser-name">{riser.name}</p>
          </div>
        ))}
      </div>
      <div className="modal">
        <div className="modal-content">
          <button onClick={handleCloseModal} className="close-modal-button">
            <Close />
          </button>
          {videoUrl && (
            <video
              src={videoUrl}
              autoPlay
              controls
              className="play-video"
            ></video>
          )}
        </div>
      </div>
    </section>
  );
};

export default MeetRisers;
