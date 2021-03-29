import mtoppic1 from "../../assets/home/mobile/create-and-share.jpg";
import mtoppic2 from "../../assets/home/mobile/beautiful-stories.jpg";
import mtoppic3 from "../../assets/home/mobile/designed-for-everyone.jpg";
import mmidpic1 from "../../assets/stories/mobile/mountains.jpg";
import mmidpic2 from "../../assets/stories/mobile/cityscapes.jpg";
import mmidpic3 from "../../assets/stories/mobile/18-days-voyage.jpg";
import mmidpic4 from "../../assets/stories/mobile/architecturals.jpg";

import tmidpic1 from "../../assets/stories/tablet/mountains.jpg";
import tmidpic2 from "../../assets/stories/tablet/cityscapes.jpg";
import tmidpic3 from "../../assets/stories/tablet/18-days-voyage.jpg";
import tmidpic4 from "../../assets/stories/tablet/architecturals.jpg";

import dmidpic1 from "../../assets/stories/desktop/mountains.jpg";
import dmidpic2 from "../../assets/stories/desktop/cityscapes.jpg";
import dmidpic3 from "../../assets/stories/desktop/18-days-voyage.jpg";
import dmidpic4 from "../../assets/stories/desktop/architecturals.jpg";
import lowpic1 from "../../assets/features/desktop/responsive.svg";
import lowpic2 from "../../assets/features/desktop/no-limit.svg";
import lowpic3 from "../../assets/features/desktop/embed.svg";

import React, { useState } from "react";

const [text1] = useState({
  title: "CREATE AND SHARE YOUR PHOTO STORIES",
  context:
    "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
  goto: "GET AN INVITE",
});

const [text2] = useState({
  title: "BEAUTIFUL STORIES EVERY TIME",
  context:
    "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
  goto: "VIEW THE STORIES",
});

const [text3] = useState({
  title: "DESIGNED FOR EVERYONE",
  context:
    "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
  goto: "VIEW THE STORIES",
});
