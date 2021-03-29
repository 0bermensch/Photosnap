import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg";

const HomeCard = (props) => {
  return (
    <div className="home__card">
      <div className="home__card--title">{props.title}</div>
      <div className="home__card--author"></div>
      <div className="home__card--section">
        <div className="home__card--read">READ STORY</div>
        <img className="home__card--arow" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default HomeCard;
