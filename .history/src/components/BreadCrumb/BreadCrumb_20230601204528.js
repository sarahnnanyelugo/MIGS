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
        <Breadcrumb.Item>{props.nav}</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
{
  props.page5 ? (
    <li className="list-inline-item">
      <NavLink to={`${props.Url5}`} activeClassName="active">
        {props.page5}
      </NavLink>
    </li>
  ) : (
    ""
  );
}
