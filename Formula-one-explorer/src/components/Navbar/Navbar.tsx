import "./navbar.css";
import { SeasonListingRoute, CircuitsRoute, StatusRoute } from "../../main";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navContainer">
      <Link className="siteTitle" to="/">
        Formula One
      </Link>
      <ul>
        <li>
          <Link className="" to={SeasonListingRoute}>
            Season Listing
          </Link>
        </li>
        <li>
          <Link to={CircuitsRoute}>Circuits</Link>
        </li>
        <li>
          <Link to={StatusRoute}>Race Status</Link>
        </li>
      </ul>
    </div>
  );
};
