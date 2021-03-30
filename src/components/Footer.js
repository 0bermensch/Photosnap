import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";
import logo from "../assets/shared/desktop/logo-white.svg";
import arrow from "../assets/shared/desktop/arrow-white.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import insta from "../assets/shared/desktop/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footer__logo" src={logo} alt="logo" />
      </Link>
      <div className="footer__socials">
        <img src={facebook} alt="facebook" />
        <img src={youtube} alt="youtube" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={insta} alt="insta" />
      </div>
      <NavLinks />
      <Button text="GET AN INVITE" underline="white" arrow={arrow} />
      <small className="footer__copyright">
        Copyright 2021. All Rights Reserved.
      </small>
    </div>
  );
};

export default Footer;
