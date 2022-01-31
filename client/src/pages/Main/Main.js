import { Link } from "react-router-dom";
import racing_cyclists_video from "../../videos/racing-cyclists2.mp4";
import "./Main.css";

export const Main = () => {
  return (
    <div>
      <div className="outter-container">
        <div className="video-container">
          <div className="callout">
            <h1>WELCOME TO BIKEVILLE!</h1>
            <Link className="link" to="/showroom">
              <button className="outline-btn">
                <h2>CHECK OUR PRODUCTS</h2>
              </button>
            </Link>
          </div>
        </div>
        <video loop autoPlay muted>
          <source src={racing_cyclists_video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
