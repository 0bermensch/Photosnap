import React, { useContext } from "react";
import { DimensionsContext } from "../GlobalDimensions";
import Button from "./Button";
import arrow from "../assets/shared/desktop/arrow-white.svg";

const CTA = () => {
  const { viewport } = useContext(DimensionsContext);
  let backdrop = "bg-beta.jpg";

  return (
    <div className="cta">
      <img
        className="cta__backdrop"
        src={
          viewport > 840
            ? require(`../assets/shared/desktop/` + backdrop).default
            : viewport > 600
            ? require(`../assets/shared/tablet/` + backdrop).default
            : require(`../assets/shared/mobile/` + backdrop).default
        }
        alt={backdrop}
      />
      <div className="cta__textbox">
        <h1 className="cta__textbox--heading">
          We're in beta <br />
          Get your invite today
        </h1>
        <Button text="Get an invite" arrow={arrow} underline="white" />
      </div>
    </div>
  );
};

export default CTA;
