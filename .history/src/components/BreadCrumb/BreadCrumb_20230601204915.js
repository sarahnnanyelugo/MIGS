import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./_breadcrum.scss";
export const Breadcrum = (props) => {
  return (
    <div className="breadcrumb-container offset-md-1">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"} className="app-link">
            Home{" "}
          </Link>
        </Breadcrumb.Item>
       {props.nav ? (<Breadcrumb.Item>{props.nav}</Breadcrumb.Item>)} 
        <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
