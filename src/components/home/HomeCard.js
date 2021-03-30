// import React from "react";
// import arrow from "../../assets/shared/desktop/arrow.svg";

// const HomeCard = (props) => {
//   return (
//     <div className="home__card">
//       <div className="home__card--title">{props.title}</div>
//       <div className="home__card--author"></div>
//       <div className="home__card--section">
//         <div className="home__card--read">READ STORY</div>
//         <img className="home__card--arow" src={arrow} alt="arrow" />
//       </div>
//     </div>
//   );
// };

// export default HomeCard;

import React, { useContext } from "react";
import { DimensionsContext } from "../../GlobalDimensions";
import Button from "../Button";
import arrow from "../../assets/shared/desktop/arrow-white.svg";

const HomeCard = () => {
  const { viewport } = useContext(DimensionsContext);
  let firstimg = "beautiful-stories.jpg",
    secondimg = "designed-for-everyone.jpg";

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
            src={
              viewport > 900
                ? require(`../../assets/home/desktop/` + firstimg)
                : viewport > 570
                ? require(`../../assets/home/tablet/` + firstimg)
                : require(`../../assets/home/mobile/` + firstimg)
            }
            alt={firstimg}
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
            src={
              viewport > 900
                ? require(`../../assets/home/desktop/` + secondimg)
                : viewport > 570
                ? require(`../../assets/home/tablet/` + secondimg)
                : require(`../../assets/home/mobile/` + secondimg)
            }
            alt={secondimg}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
