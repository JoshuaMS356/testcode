import React, { useState } from "react";
import Video from "../../video.mp4";
import { Button2 } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

//import { NavBtn, NavBtnLink } from "../NavBar";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Full Throttle Web Performance</HeroH1>
        <HeroP>Contact us today to help you blow by the competion</HeroP>
        <HeroBtnWrapper>
          <Button2
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Us{hover ? <ArrowForward /> : <ArrowRight />}
          </Button2>

          {/* <NavBtn>
            <NavBtnLink to="/contact">Let's Go!</NavBtnLink>
          </NavBtn> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

//export default HeroSection;
