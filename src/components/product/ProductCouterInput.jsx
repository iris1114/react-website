import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductCouterInput = () => {
  return (
    <StyledProductCouterInput>
      <button className="f-lg-2xl">-</button>
      <input type="number" value="1" />
      <button className="f-lg-2xl">+</button>
    </StyledProductCouterInput>
  );
};

const StyledProductCouterInput = styled.div`
  display: flex;

  button {
    text-decoration: none;
    background: ${COLOR.white};
    border: 1px solid ${COLOR.gold};
    padding: 0px 10px;
    color: ${COLOR.gold};

    &:hover {
      background: ${COLOR.gold};
      color: ${COLOR.white};
    }
  }

  input {
    border: 1px solid ${COLOR.gold};
    height: 34px;
    width: 130px;
    border-right: 0px;
    border-left: 0px;
    text-align: center;
    color: ${COLOR.gold};
  }
`;

export default ProductCouterInput;
