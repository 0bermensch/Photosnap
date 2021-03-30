import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

const StoryCard = ({ title, datae, author, image, href }) => {
  const { viewport } = useContext(DimensionsContext);

  return (
    <div className="story__card">
      <img
        className="story__card--image"
        src={
          viewport > 550
            ? require(`../../assets/stories/desktop/` + image)
            : require(`../../assets/stories/tablet/` + image)
        }
        alt={title}
      />
      <div className="story__card__text">
        <small className="story__card__text--date"></small>
        <h3 className="story__card__text--title"></h3>
        <small className="story__card__text--author"></small>
        <hr className="story__card__text--linebreak" />
        <Button text="Read Story" arrow={arrow} href={href} />
      </div>
    </div>
  );
};

export default StoryCard;
