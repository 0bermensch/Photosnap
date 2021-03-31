import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";

const FeaturesHero = () => {
  const { viewport } = useContext(DimensionsContext);
  let heropic = "hero.jpg";

  return (
    <div className="features__hero">
      <div className="features__hero__textbox">
        <h1 className="features__hero__textbox--heading">Features</h1>
        <p className="features__hero__textbox--context">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
      <div className="features__hero__image__container">
        <img
          className="features__hero__image__container--image"
          src={
            viewport > 900
              ? require(`../../assets/features/desktop/` + heropic).default
              : viewport > 570
              ? require(`../../assets/features/tablet/` + heropic).default
              : require(`../../assets/features/mobile/` + heropic).default
          }
          alt="Professional camera in hand for photography"
        />
      </div>
    </div>
  );
};

export default FeaturesHero;
