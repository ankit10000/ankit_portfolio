import React from "react";
import { stackList } from "../../data/ProjectData";
import aboutpic from "../../img/admin.png";
import Fade from 'react-reveal/Fade';

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
<Fade bottom>
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={aboutpic} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Ankit Jangid</strong> is an expertise in web design,
            Node.js, Express.js, MongoDB, React.js, Bootstrap, PHP, and MySQL.
            Specializing in creating dynamic and responsive websites and
            applications, he collaborates with experienced developers,
            continually learning and adhering to industry best practices.
            Currently pursuing MCA degrees at JECRC University and Sunstone,
            Ankit's academic journey in computer science is complemented by
            certifications in web design, Google Sheets, and Facebook Ads. With
            top skills in MongoDB, Express.js, React.js, Node.js, and
            JavaScript, he aspires to become a proficient full-stack web
            developer, delivering high-quality solutions across diverse
            requirements and audiences.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
      </Fade>
    </ContactWrapper>
  );
}

export default About;
