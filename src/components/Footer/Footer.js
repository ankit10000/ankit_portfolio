import React from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
const FooterSection = styled.div`
  /* background-image: url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg); */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;


  span {
    position: absolute;
    bottom: 4rem;
    left: 10rem;
    color: #fff;
    font-weight: bolder;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/ankit10000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ankit
          </a>
        </span>
      </div>
      <ScrollToTop smooth/>
    </FooterSection>
  );
}

export default Footer;
