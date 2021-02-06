import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const Button = ({ text, variant, onButtonClick }) => {
  return (
    <StyledButton
      className="f-lg-m"
      variant={variant}
      onClick={() => {
        onButtonClick && onButtonClick();
      }}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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
  cursor: pointer;
  min-width: 140px;
  text-align: center;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? COLOR.darkGold : COLOR.gold};
    color: ${COLOR.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;

    &:hover {
      background-color: ${(props) =>
        props.variant === "primary" ? COLOR.gold : COLOR.white};
      color: ${(props) =>
        props.variant === "primary" ? COLOR.white : COLOR.gold};
    }
  }
`;

export default Button;
