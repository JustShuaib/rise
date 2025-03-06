import Play from "../assets/icons/play";
import "./meetRisers.css";

const risers = [
  {
    name: "Sanni",
    video: "/path-to-video1.mp4",
    thumbnail: "./assets/riser-sanni.jpg",
  },
  {
    name: "Layo",
    video: "/path-to-video2.mp4",
    thumbnail: "./assets/riser-layo.jpg",
  },
  {
    name: "Henry",
    video: "/path-to-video3.mp4",
    thumbnail: "./assets/riser-henry.jpg",
  },
];

const MeetRisers = () => {
  const handleModal = (name: string) => {
    document.body.classList.add('no-scroll');
    document.querySelector('.modal')!.classList.add('modal-visible');
    console.log("Modal open for", name);
  };
  return (
    <section className="meet-risers">
      <h2>
        Meet Some <span className="heading-span">Rise Users</span>
      </h2>
      <div className="risers-container">
        {/* ************* SANNI ********** */}
        <div className="riser-card riser-sanni">
          <button className="play-button" onClick={() => handleModal("sanni")}>
            <span className="play-button-icon">
              <Play />
            </span>
          </button>
          <p className="riser-name">Sanni</p>
        </div>
        {/* {risers.map((riser, index) => (
          <div key={index} className="riser-card">
            <div className="video-wrapper">

              <button className="play-button">▶</button>
            </div>
            <p className="riser-name">{riser.name}</p>
          </div>
        ))} */}
      </div>
      {/* <div className="floating-decorations">
        <span className="circle teal"></span>
        <span className="circle pink"></span>
        <span className="circle purple"></span>
      </div> */}
      <div className="modal">
        <div className="modal-content">

        </div>
      </div>
    </section>
  );
};

export default MeetRisers;
