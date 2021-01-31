import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="d-flex justify-content-center mb-3">
        <a href="https://www.facebook.com/" className="mr-3">
          <FontAwesomeIcon className="icon" icon={faFacebookF} size="lg" />
        </a>
        <a href="https://www.instagram.com/" className="mr-3">
          <FontAwesomeIcon className="icon" icon={faInstagram} size="lg" />
        </a>
        <a href="https://www.youtube.com/">
          <FontAwesomeIcon className="icon" icon={faYoutube} size="lg" />
        </a>
      </div>
      <div className="f-lg-s">COPYRIGHT © 2021 SECRET CAKE</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 20px 0px;
  text-align: center;
  color: ${COLOR.nude};
  background-color: #a9998c;

  .icon {
    color: ${COLOR.nude};
  }
`;

export default Footer;
