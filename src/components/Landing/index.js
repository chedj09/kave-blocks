import { Button, Col } from "antd";
import React from "react";
import Video from "../../video/video.m4v";
import "../Landing/landing.css";

import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
} from "./Landing";

const LandingSection = () => {
  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandingBg>
      <LandingContent>
        <h1>KAVE BLOCKS</h1>
        <p>
          We specialize in creating smooth and seamless web and mobile
          applications, websites, incorporating the best digital marketing
          strategies, and offering other e-commerce solutions to help businesses
          grow and gain a competitive edge in the digital marketplace.
        </p>
        <Button to="getstarted">Get Started</Button>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
