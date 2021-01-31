import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductRatioInput = ({ category }) => {
  return (
    <StyledProductRatioInput>
      <input
        type="radio"
        id={category}
        name="category"
        value="all"
        className="mr-2 input-radio"
      />
      <label htmlFor={category} className="f-lg-l text-upper label-text">
        {category}
      </label>
    </StyledProductRatioInput>
  );
};

const StyledProductRatioInput = styled.div`
  .input-radio {
    &:after {
      content: "";
      position: relative;
    }

    &:checked:after {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: ${COLOR.gold};
      content: "";
      display: inline-block;
    }
  }
`;

export default ProductRatioInput;
