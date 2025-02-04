import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
  StyledParagraph
} from "./ProjectCardElements";
import Zoom from 'react-reveal/Zoom';


function ProjectCard() {
  return (
    <Zoom bottom>
      {ProjectList.map((list, index) => (
        <Card className="text-white" key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
              {/* <iframe
                allow="autoplay; gyroscope;"
                allowfullscreen
                referrerpolicy="strict-origin"
                src={list.video}
                title="Embedded content made on Kapwing"
              ></iframe>          */}
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <StyledParagraph>{list.description}</StyledParagraph>
            <Stack>
              <span className="stackTitle">Skills: </span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </Zoom>
  );
}

export default ProjectCard;
