import React from "react";
import styled from "styled-components";
import defaultCard from "../../images/card/defaultFront.jpg";
import ProductCouterInput from "../../components/product/ProductCouterInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/styles";

const CartItemBlock = ({ quantity }) => {
  return (
    <StyledCartItemBlock>
      <div className="row align-items-center text-center">
        <div className="col-12 col-md-7 mb-3 mb-md-0  d-flex align-items-center">
          <div className="col-5 col-md-3">
            <img src={defaultCard} alt="item" />
          </div>
          <div className="col-5 col-md-4">product name</div>
          <div className="col-2 col-md-5">$150 </div>
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="col-5 col-md-5">
            <ProductCouterInput quantity={quantity} />
          </div>
          <div className="col-5 col-md-5">$150</div>
          <div className="col-2 col-md-2 cursor-pointer">
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </div>
        </div>
      </div>
    </StyledCartItemBlock>
  );
};

const StyledCartItemBlock = styled.div`
  margin: 30px 0px;
  padding: 20px 0px;
  border-bottom: 1px solid ${COLOR.nude};
`;

export default CartItemBlock;
