import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg";

const HomeText = (props) => {
  return (
    <div className="home__text">
      <div className="home__text--title">{props.title}</div>
      <div className="home__text--content">{props.content}</div>
      <div className="home__text--section">
        <div className="home__text--goto">{props.goto}</div>
        <img className="home__text--arrow" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default HomeText;
