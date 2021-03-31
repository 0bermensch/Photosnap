import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

const StoryCard = ({ title, date, author, image, href }) => {
  const { viewport } = useContext(DimensionsContext);

  return (
    <div className="stories__card">
      <img
        className="stories__card--image"
        src={
          viewport > 550
            ? require(`../../assets/stories/desktop/` + image).default
            : require("../../assets/stories/mobile/" + image).default
        }
        alt={title}
      />
      <div className="stories__card__textbox">
        <small className="stories__card__textbox--date">{date}</small>
        <h3 className="stories__card__textbox--title">{title}</h3>
        <small className="stories__card__textbox--author">{author}</small>
        <hr className="stories__card__textbox--linebreak" />
        <Button text="Read Story" arrow={arrow} href={href} />
      </div>
    </div>
  );
};

export default StoryCard;
