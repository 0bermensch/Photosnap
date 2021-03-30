import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const navPages = ["HOME", "STORIES", "FEATURES", "PRICING"];
  return (
    <ul className="navlinks">
      {navPages.map((destination, i) => (
        <li className="navlinks__links" key={i}>
          <Link to={i === 0 ? `/` : `/${destination}`}>{destination}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
