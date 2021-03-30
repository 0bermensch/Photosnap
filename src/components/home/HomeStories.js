import React, { useState } from "react";
import info from "../../storiesdata.json";
import StoryCard from "../stories/StoryCard";

const HomeStories = () => {
  const [homeStories] = useState([...data].slice(1, 5));
  return (
    <div className="home__stories">
      {homeStories.map(({ illustration, title, author }) => (
        <StoryCard
          key={title}
          image={illustration}
          title={title}
          author={author}
          href="/stories"
        />
      ))}
    </div>
  );
};

export default HomeStories;
