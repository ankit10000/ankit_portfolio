import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import ProfilePIC from "../../img/admin.png"
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
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>
            <h2 class="title">
              <span class="title-word title-word-1">Hello, </span>
              <span class="title-word title-word-2"> I'm</span>
              <span class="title-word title-word-3"> Ankit </span>
              <span class="title-word title-word-4">Jangid</span>
            </h2>
            </h1>
            <h5>Front-end Developer & Back-end Developer</h5>
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
            <Image
              src={ProfilePIC}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
