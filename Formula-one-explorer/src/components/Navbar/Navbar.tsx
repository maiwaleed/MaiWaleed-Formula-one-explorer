import "./navbar.css";
import {
  SeasonListingRoute,
  RacesForASeasonRoute,
  RaceDetailsRoute,
} from "../../main";
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
          <Link to={RacesForASeasonRoute}>Races for a Season</Link>
        </li>
        <li>
          <Link to={RaceDetailsRoute}>Race Details</Link>
        </li>
      </ul>
    </div>
  );
};
