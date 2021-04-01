import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";

const PricingHero = () => {
  const { viewport } = useContext(DimensionsContext);
  let pricingHero = "hero.jpg";

  return (
    <div className="pricing__hero">
      <div className="pricing__hero__textbox">
        <h1 className="pricing__hero__textbox--title">Pricing</h1>
        <p className="pricing__hero__textbox--context">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
      <div className="pricing__hero__image__container">
        <img
          className="pricing__hero__image__container--image"
          src={
            viewport > 900
              ? require(`../../assets/pricing/desktop/` + pricingHero).default
              : viewport > 570
              ? require(`../../assets/pricing/tablet/` + pricingHero).default
              : require(`../../assets/pricing/mobile/` + pricingHero).default
          }
          alt="Professional camera in hand for photography"
        />
      </div>
    </div>
  );
};

export default PricingHero;
