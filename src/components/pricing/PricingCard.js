import React from "react";

const PricingCard = ({ plan, description, price, billingCycle }) => {
  return (
    <div className="pricing__card">
      <h2 className="pricing__card--plan">{plan}</h2>
      <p className="pricing__card--description">{description}</p>
      <div className="pricing__card__textbox">
        <h1 className="pricing__card__textbox--price">{price}</h1>
        <small className="pricing__card__textbox--cycle">{`per ${
          billingCycle ? "month" : "year"
        }`}</small>
      </div>
      <button className="pricing__card--button">Pick Plan</button>
    </div>
  );
};

export default PricingCard;
