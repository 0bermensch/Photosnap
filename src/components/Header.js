import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import menu from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const navState = useRef();
  const { body } = document;

  useEffect(() => {
    onMobNavChange();
  });

  const openMobNav = () => {
    navState.current.classList.add("change");
    body.style.overflowY = "hidden";
    body.parentElement.style.overflowY = "hidden";
  };

  const closeMobNav = () => {
    setTimeout(function () {
      navState.current.classList.remove("change");
    }, 850);
    body.style.overflowY = "visible";
    body.parentElement.style.overflowY = "visible";
  };

  const onMobNavChange = () => {
    let menu = document.querySelector(".header__mob--nav"),
      menuChildren = [...menu.children[0].children].concat(menu.children[1]);

    menuChildren.forEach((child) =>
      child.addEventListener("click", () => {
        closeAll();
      })
    );
  };

  const closeAll = () => {
    setOpenNavMenu(false);
    closeMobNav();
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => closeAll()}>
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__navs">
        <NavLinks />
      </div>
      <Button text={"GET AN INVITE"} />
      <div
        className="header__mob"
        ref={navState}
        onClick={() => setOpenNavMenu(!openNavMenu)}
      >
        <img
          className="header__mob--open"
          src={menu}
          alt="open"
          onClick={openMobNav}
        />
        <img
          className={`header__mob--close ${!openNavMenu ? "spin" : ""}`}
          src={close}
          alt="close"
          onClick={closeMobNav}
        />
      </div>
      <div
        className={`header__mob--nav ${openNavMenu ? "deployed" : ""} `}
        onClick={onMobNavChange}
      >
        <NavLinks />
        <Button text="GET AN INVITE" />
      </div>
      <div className={`overlay ${openNavMenu ? "active" : ""}`} />
    </div>
  );

  // let hamburgerNav;

  // if (openNavMenu) {
  //   hamburgerNav = (
  //     <>
  //       <ul className="header__hamburgernav">
  //         <li>
  //           <NavLink className="header__hamburgernav--item" to="/stories">
  //             STORIES
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink className="header__hamburgernav--item" to="/features">
  //             FEATURES
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink className="header__hamburgernav--item" to="/pricing">
  //             PRICING
  //           </NavLink>
  //         </li>

  //         <button className="header__hamburgernav--button">
  //           GET AN INVITE
  //         </button>
  //       </ul>
  //     </>
  //   );
  // }

  // return (
  //   <div className="header">
  //     <div className="header__content">
  //       <NavLink to="/" onClick={() => closeAll()}>
  //         <img className="header__logo" src={logo} />
  //       </NavLink>

  //       {!openNavMenu ? (
  //         <img
  //           className="header__hamburger"
  //           src={menu}
  //           onClick={() => setOpenNavMenu(true)}
  //         />
  //       ) : (
  //         <img
  //           className="header__hamburger"
  //           src={close}
  //           onClick={() => setOpenNavMenu(false)}
  //         />
  //       )}

  //       <ul className="header__nav">
  //         <li>
  //           <NavLink className="header__nav--item" to="/stories">
  //             STORIES
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink className="header__nav--item" to="/features">
  //             FEATURES
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink className="header__nav--item" to="/pricing">
  //             PRICING
  //           </NavLink>
  //         </li>
  //         <button className="header__nav--buton">GET AN INVITE</button>
  //       </ul>
  //     </div>
  //     {hamburgerNav}
  //   </div>
  // );
};

export default Header;
