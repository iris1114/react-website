import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/styles";

const Banner = ({ image, text }) => {
  return (
    <StyledBanner bg={image}>
      <h2 className="f-lg-6xl f-md-4xl f-3xl text text-upper">{text}</h2>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    background-attachment: inherit;
  }

  .text {
    padding: 8% 10% 10% 20%;
  }
`;

export default Banner;
