import React from "react";
import PricingHero from "../components/pricing/PricingHero";
import PricingPrices from "../components/pricing/PricingPrices";
import PricingTable from "../components/pricing/PricingTable";
import CTA from "../components/CallToAction";

const Pricing = () => {
  return (
    <div className="pricing">
      <PricingHero />
      <PricingPrices />
      <PricingTable />
      <CTA />
    </div>
  );
};

export default Pricing;
