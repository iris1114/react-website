import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductCouterInput = ({ quantity, onMinus, onPlus }) => {
  return (
    <StyledProductCouterInput>
      <button
        className="f-lg-2xl"
        onClick={() => {
          onMinus && onMinus();
        }}
      >
        -
      </button>
      <div className="quantity">{quantity}</div>
      <button
        className="f-lg-2xl"
        onClick={() => {
          onPlus && onPlus();
        }}
      >
        +
      </button>
    </StyledProductCouterInput>
  );
};

const StyledProductCouterInput = styled.div`
  display: flex;
  align-items: center;

  button {
    text-decoration: none;
    background: ${COLOR.white};
    border: 1px solid ${COLOR.gold};
    padding: 0px 10px;
    color: ${COLOR.gold};
    height: 34px;

    &:hover {
      background: ${COLOR.gold};
      color: ${COLOR.white};
    }
  }

  .quantity {
    border: 1px solid ${COLOR.gold};
    color: ${COLOR.gold};
    border-left: none;
    border-right: none;
    line-height: 34px;
    height: 34px;
    width: 60px;
    text-align: center;
  }
`;

export default ProductCouterInput;
