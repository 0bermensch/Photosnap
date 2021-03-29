import React from "react";
import HomeText from "../components/home/HomeText";
import HomeCard from "../components/home/HomeCard";
import HomeLower from "../components/home/HomeLower";
import mtoppic1 from "../assets/home/mobile/create-and-share.jpg";
import mtoppic2 from "../assets/home/mobile/beautiful-stories.jpg";
import mtoppic3 from "../assets/home/mobile/designed-for-everyone.jpg";
import ttoppic1 from "../assets/home/tablet/create-and-share.jpg";
import ttoppic2 from "../assets/home/tablet/beautiful-stories.jpg";
import ttoppic3 from "../assets/home/tablet/designed-for-everyone.jpg";
import dtoppic1 from "../assets/home/desktop/create-and-share.jpg";
import dtoppic2 from "../assets/home/desktop/beautiful-stories.jpg";
import dtoppic3 from "../assets/home/desktop/designed-for-everyone.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__mobile">
        <img className="home__mobile--pic" src={mtoppic1} alt="pic" />
        <HomeText />
        <img className="home__mobile--pic" src={mtoppic2} alt="pic" />
        <HomeText />
        <img className="home__mobile--pic" src={mtoppic3} alt="pic" />
        <HomeText />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeLower />
        <HomeLower />
        <HomeLower />
      </div>
      <div className="home__tablet">
        <div className="home__tablet--section">
          <HomeText />
          <img src={ttoppic1} alt="pic" />
        </div>
        <div className="home__tablet--section">
          <img src={ttoppic2} alt="pic" />
          <HomeText />
        </div>
        <div className="home__tablet--section">
          <img src={ttoppic3} alt="pic" />
          <HomeText />
        </div>
        <div className="home__tablet--section">
          <HomeCard />
          <HomeCard />
        </div>
        <div className="home__tablet--section">
          <HomeCard />
          <HomeCard />
        </div>
        <HomeLower />
        <HomeLower />
        <HomeLower />
      </div>
      <div className="home__desktop">
        <div className="home__desktop--section">
          <HomeText />
          <img src={dtoppic1} alt="pic" />
        </div>
        <div className="home__desktop--section">
          <img src={dtoppic2} alt="pic" />
          <HomeText />
        </div>
        <div className="home__desktop--section">
          <HomeText />
          <img src={dtoppic3} alt="pic" />
        </div>
        <div className="home__desktop--section">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        <div className="home__desktop--section">
          <HomeLower />
          <HomeLower />
          <HomeLower />
        </div>
      </div>
    </div>
  );
};

export default Home;
