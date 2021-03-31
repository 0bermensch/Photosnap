import React from "react";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesContent from "../components/features/FeaturesContent";
import CTA from "../components/CallToAction";

const Features = () => {
  return (
    <div className="features">
      <FeaturesHero />
      <FeaturesContent />
      <CTA />
    </div>
  );
};

export default Features;
