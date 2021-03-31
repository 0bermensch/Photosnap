import React from "react";

const FeaturesCard = ({ icon, heading, subheading }) => {
  return (
    <div className="features__card">
      <div className="features__card__icons">
        <img
          className="features__card__icons--icon"
          src={icon}
          alt={`${heading} icon`}
        />
      </div>
      <div className="features__card__textbox">
        <h4 className="features__card__textbox--title">{heading}</h4>
        <p className="features__card__textbox--context">{subheading}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
