import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductCouterInput = ({ quantity, onMinus, onPlus, onQuantity }) => {
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
      <input
        type="number"
        value={quantity}
        onChange={() => {
          onQuantity && onQuantity();
        }}
      />
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
    width: 80px;
    border-right: 0px;
    border-left: 0px;
    text-align: center;
    color: ${COLOR.gold};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

`;

export default ProductCouterInput;
