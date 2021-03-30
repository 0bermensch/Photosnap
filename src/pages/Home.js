import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeStories from "../components/home/HomeStories";
import HomeCard from "../components/home/HomeCard";
import HomeFeatures from "../components/home/HomeFeatures";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeCard />
      <HomeStories />
      <HomeFeatures />
    </div>
  );
};

export default Home;
