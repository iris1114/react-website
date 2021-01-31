import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../utils";

const Button = ({ btnLink, btnText, variant }) => {
  return (
    <StyledButton to={btnLink} className="f-lg-m" variant={variant}>
      {btnText}
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
  background-color: ${(props) =>
    props.variant === "primary" ? COLOR.gold : COLOR.white};
  line-height: 25px;
  padding: 10px 30px;
  letter-spacing: 2px;
  border: 1px solid ${COLOR.gold};
  outline: 1px solid ${COLOR.gold};
  outline-offset: 2px;
  text-transform: uppercase;
  color: ${(props) => (props.variant === "primary" ? COLOR.white : COLOR.gold)};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? COLOR.darkGold : COLOR.gold};
    color: ${COLOR.white};
  }
`;

export default Button;
