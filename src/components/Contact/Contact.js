import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import Fade from 'react-reveal/Fade';
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <Fade left>
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>ankitjangid9197@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:ankitjangid9197@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
      </Fade>
    </ContactWrapper>
  );
}

export default Contact;
