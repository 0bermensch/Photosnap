import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import menu from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const toggle = () => setNavIcon(!navIcon);

  let hamburgerNav;

  if (openNavMenu) {
    hamburgerNav = (
      <>
        <ul className="header__hamburgernav">
          <li>
            <NavLink className="header__hamburgernav--item" to="/stories">
              STORIES
            </NavLink>
          </li>
          <li>
            <NavLink className="header__hamburgernav--item" to="/features">
              FEATURES
            </NavLink>
          </li>
          <li>
            <NavLink className="header__hamburgernav--item" to="/pricing">
              PRICING
            </NavLink>
          </li>

          <button className="header__hamburgernav--button">
            GET AN INVITE
          </button>
        </ul>
      </>
    );
  }

  return (
    <div className="header">
      <div className="header__content">
        <NavLink className="header__logo" to="/">
          <img className="header__logo--logo" src={logo} />
        </NavLink>

        {!openNavMenu ? (
          <img
            className="header__hamburger"
            src={menu}
            onClick={() => setOpenNavMenu(true)}
          />
        ) : (
          <img
            className="header__hamburger"
            src={close}
            onClick={() => setOpenNavMenu(false)}
          />
        )}

        <ul className="header__nav">
          <li>
            <NavLink className="header__nav--item" to="/stories">
              STORIES
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav--item" to="/features">
              FEATURES
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav--item" to="/pricing">
              PRICING
            </NavLink>
          </li>
          <button className="header__nav--buton">GET AN INVITE</button>
        </ul>
      </div>
      {hamburgerNav}
    </div>
  );
};

export default Header;
