import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../assets/images/slide1.png";
import Slide2 from "../../../assets/images/slide2.png";
import "./dashboard-display.scss";

function LandingImages() {
  return (
    <>
      <div className="lib-dashboard-display-carousel col-md-12">
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy  landing-img">
              {" "}
              <img className="" src={Slide1} alt="Scholar" width="100%" />
              <div className="centered3 col-md-12 ">
                <h1>
                  Excellence is <br />
                  our birthright
                </h1>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12  landing-img">
              <img className="" src={Slide2} alt="Scholar" width="100%" />
              <div className="centered3 col-md-12 ">
                <h1>
                  Excellence is <br />
                  our birthright
                </h1>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default LandingImages;
