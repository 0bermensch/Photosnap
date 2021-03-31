import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

const StoriesHero = ({ hero }) => {
  const { viewport } = useContext(DimensionsContext);

  return (
    <>
      {hero.map(({ illustration, title, date, author, subheading }) => (
        <div className="stories__hero" key={title}>
          <img
            className="stories__hero--backdrop"
            src={
              viewport > 925
                ? require(`../../assets/stories/desktop/` + illustration)
                    .default
                : viewport > 620
                ? require(`../../assets/stories/tablet/` + illustration).default
                : require(`../../assets/stories/mobile/` + illustration).default
            }
            alt={`${title} article`}
          />
          <div className="stories__hero__textbox">
            <small className="stories__hero__textbox--featured">
              Last Month's Featured Story
            </small>
            <h1 className="stories__hero__textbox--heading">{title}</h1>
            <span className="stories__hero__textbox--date">{date}</span>
            <span className="stories__hero__textbox--author">by {author}</span>
            <p className="stories__hero__textbox--synopsis">{subheading}</p>
            <Button text="Read Story" arrow={arrow} underline="white" />
          </div>
        </div>
      ))}
    </>
  );
};

export default StoriesHero;
