import React, { useState } from "react";
import PricingCard from "./PricingCard";

const PricingPrices = () => {
  const [payment, setPayment] = useState(true);
  return (
    <div className="pricing__section">
      <div className="pricing__section__toggle">
        <span>Monthly</span>
        <button
          className={`pricing__section__toggle--button ${
            !payment ? "active" : ""
          }`}
          onClick={() => setPayment(!payment)}
        >
          <span
            className="slider
        "
          />
        </button>
        <span>Annually</span>
        <div className="pricing__section__cards__container">
          <PricingCard
            plan="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={payment ? "$19.00" : "$190.00"}
            billingCycle={payment}
          />
          <PricingCard
            plan="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price={payment ? "$39.00" : "$390.00"}
            billingCycle={payment}
          />
          <PricingCard
            plan="Business"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            price={payment ? "$99.00" : "$990.00"}
            billingCycle={payment}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPrices;
