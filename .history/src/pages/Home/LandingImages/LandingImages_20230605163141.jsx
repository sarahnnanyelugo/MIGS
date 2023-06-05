import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/lib_manage.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";
import Requisition from "../../../assets/images/text_book.png";
import Statement from "../../../assets/images/book_stack.png";
import Inventory from "../../../assets/images/borrowed_books.png";
import "./dashboard-display.scss";

function LandingImages() {
  return (
    <>
      <div className="lib-dashboard-display-carousel col-md-12">
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <img className="" src={Dashboard} alt="Scholar" width="100%" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 ">
              <img className="" src={Requisition} alt="Scholar" width="100%" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default LandingImages;
