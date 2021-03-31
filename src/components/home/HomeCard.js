import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow.svg";
import dpic1 from "../../assets/home/desktop/beautiful-stories.jpg";
import tpic1 from "../../assets/home/tablet/beautiful-stories.jpg";
import mpic1 from "../../assets/home/mobile/beautiful-stories.jpg";
import dpic2 from "../../assets/home/desktop/designed-for-everyone.jpg";
import tpic2 from "../../assets/home/tablet/designed-for-everyone.jpg";
import mpic2 from "../../assets/home/mobile/designed-for-everyone.jpg";

const HomeCard = () => {
  const { viewport } = useContext(DimensionsContext);

  return (
    <div className="home__card">
      <div className="home__card__section">
        <div className="home__card__section__textbox">
          <h1 className="home__card__section__textbox--title">
            Beautiful stories every time
          </h1>
          <p className="home__card__section__textbox--context">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <Button
            text="View the Stories"
            arrow={arrow}
            href="/stories"
            underline="black"
          />
        </div>
        <div className="home__card__section__image">
          <img
            className="home__card__section__image--image"
            src={viewport > 900 ? dpic1 : viewport > 570 ? tpic1 : mpic1}
            alt="pic1"
          />
        </div>
      </div>
      <div className="home__card__section">
        <div className="home__card__section__textbox">
          <h1 className="home__card__section__textbox--title">
            Designed for everyone
          </h1>
          <p className="home__card__section__textbox--context">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <Button
            text="View the Stories"
            arrow={arrow}
            href="/stories"
            underline="black"
          />
        </div>
        <div className="home__card__section__image">
          <img
            className="home__card__section__image--image"
            src={viewport > 900 ? dpic2 : viewport > 570 ? tpic2 : mpic2}
            alt="pic2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
