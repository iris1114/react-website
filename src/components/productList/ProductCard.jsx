import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductCard = ({ image, name, price }) => {
  return (
    <StyledProductCard>
      <div className="mb-3 card-img">
        <img src={image} alt="cake" />
        <p className="view-btn f-lg-s">view product</p>
      </div>
      <div className="text-center card-text">
        <h2 className="mb-3 ">{name}</h2>
        <p>${price}</p>
      </div>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  cursor: pointer;
  margin: 30px 10px;

  .card-img {
    position: relative;
    width: 250px;

    .view-btn {
      display: none;
      text-transform: uppercase;

      &:hover {
        color: ${COLOR.darkGold};
      }
    }

    &:hover {
      opacity: 0.7;

      .view-btn {
        display: block;
        position: absolute;
        bottom: 0px;
        background-color: ${COLOR.nude};
        width: 100%;
        padding: 15px 0px;
        text-align: center;
      }
    }
  }
`;

export default ProductCard;
