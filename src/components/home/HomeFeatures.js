import React from "react";
import responsive from "../../assets/features/desktop/responsive.svg";
import nolimit from "../../assets/features/desktop/no-limit.svg";
import embeded from "../../assets/features/desktop/embed.svg";
import FeaturesCard from "../features/FeaturesCard";

const HomeLower = () => {
  return (
    <div className="home__features">
      <FeaturesCard
        icon={responsive}
        heading="100% Responsive"
        subheading="No matter which the device you’re on, our site is fully responsive and stories 
            look beautiful on any screen."
      />
      <FeatureCard
        icon={nolimit}
        heading="No Photo Upload Limit"
        subheading="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
            all of your stories in one go."
      />
      <FeatureCard
        icon={embeded}
        heading="Available to Embed"
        subheading="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
            Maps, and more."
      />
    </div>
  );
};

export default HomeLower;
