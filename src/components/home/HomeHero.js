import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow-white.svg";
import dpic from "../../assets/home/desktop/create-and-share.jpg";
import tpic from "../../assets/home/tablet/create-and-share.jpg";
import mpic from "../../assets/home/mobile/create-and-share.jpg";

const HomeHero = () => {
  const { viewport } = useContext(DimensionsContext);
  let heroimg = "create-and-share.jpg";

  return (
    <div className="home__hero">
      <div className="home__hero__textbox">
        <h1 className="home__hero__textbox--heading">
          Create and share your photo Stories
        </h1>
        <p className="home__hero__textbox--context">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <Button text="Get an invite" arrow={arrow} underline="white" />
      </div>
      <div className="home__hero__image__container">
        <img
          className="home__hero__image__container--image"
          src={viewport > 900 ? dpic : viewport > 570 ? tpic : mpic}
          alt={heroimg}
        />
      </div>
    </div>
  );
};

export default HomeHero;
