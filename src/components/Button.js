import React from "react";

const Button = ({ text, arrow, link, underline }) => {
  return (
    <a
      href={link}
      className={`arrowbtn ${
        underline === "white"
          ? "underline white"
          : underline === "black"
          ? "underline black"
          : ""
      }`}
    >
      <span>{text}</span>
      <img src={arrow} alt="arrow" />
    </a>
  );
};

export default Button;
