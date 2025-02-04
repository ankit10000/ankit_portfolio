import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import ProfilePIC from "../../img/admin.png"
import Fade from 'react-reveal/Fade';

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1 className="title h2">
              <span className="title-word title-word-1">Hello, </span>
              <span className="title-word title-word-2"> I'm</span>
              <span className="title-word title-word-3"> Ankit </span>
              <span className="title-word title-word-4">Jangid</span>
            </h1>
            <h5 className="h5">Front-end Developer & Back-end <br /> Developer</h5>
            <p className="p">
            I create and develop elegantly
            </p>
            <p className="p1">
            straightforward designs, and I
            </p>
            <p className="p2">
             am passionate about my work.
            </p>
          </HeroLeft>
          <HeroRight>
            <Fade top>
            <Image
              src={ProfilePIC}
              alt="man-svgrepo"
            />
            </Fade>
          </HeroRight>
        </HeroWrapper>
        <Fade top>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </Fade>
      </HeroContainer>
             
    </>
  );
}

export default Hero;
