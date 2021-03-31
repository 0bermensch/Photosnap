import React, { useState } from "react";
import StoriesHero from "../components/stories/StoriesHero";
import StoriesCard from "../components/stories/StoryCard";
import data from "../storiesdata.json";

const Stories = () => {
  const [stories] = useState(data);

  let hero = stories.slice(0, 1),
    storiescards = stories.slice(1, stories.length);

  return (
    <div className="stories">
      <StoriesHero hero={hero} />
      <div className="stories__grid">
        {storiescards &&
          storiescards.map(({ illustration, title, author, date }, i) => (
            <StoriesCard
              key={i}
              image={illustration}
              title={title}
              author={author}
              date={date}
            />
          ))}
      </div>
    </div>
  );
};

export default Stories;
