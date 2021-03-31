import React from "react";
import FeaturesCard from "./FeaturesCard";
import responsive from "../../assets/features/desktop/responsive.svg";
import nolimit from "../../assets/features/desktop/no-limit.svg";
import embeded from "../../assets/features/desktop/embed.svg";
import domain from "../../assets/features/desktop/custom-domain.svg";
import exposure from "../../assets/features/desktop/boost-exposure.svg";
import dragdrop from "../../assets/features/desktop/drag-drop.svg";

const FeaturesContent = () => {
  return (
    <div className="features__grid">
      <FeaturesCard
        icon={responsive}
        heading="100% Responsive"
        subheading="No matter which the device you’re on, our site is fully responsive and stories 
            look beautiful on any screen."
      />
      <FeaturesCard
        icon={nolimit}
        heading="No Photo Upload Limit"
        subheading="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
            all of your stories in one go."
      />
      <FeaturesCard
        icon={embeded}
        heading="Available to Embed"
        subheading="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
            Maps, and more."
      />
      <FeaturesCard
        icon={domain}
        heading="Custom Domain"
        subheading="With Photosnap subscriptions you can host your stories on your own domain. You can 
            also remove our branding!"
      />
      <FeaturesCard
        icon={exposure}
        heading="Boost Your Exposure"
        subheading="Users that viewed your story or gallery can easily get notifed of new and featured 
            stories with our built in mailing list."
      />
      <FeaturesCard
        icon={dragdrop}
        heading="Drag & Drop Image"
        subheading="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
      />
    </div>
  );
};

export default FeaturesContent;
