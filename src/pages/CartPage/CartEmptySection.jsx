import React from "react";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartEmptySection = () => {
  return (
    <StyledCartEmptySection>
      <div className="container">
        <div className="text-center">
          <p className="f-lg-3xl mb-5">The cart is now empty.</p>
          <p className="f-lg-3xl mb-5">
            Select some products to buy before checking out.
          </p>
          <Link to="/shop">
            <Button text="Go To Shop" variant="primary" />
          </Link>
        </div>
      </div>
    </StyledCartEmptySection>
  );
};

const StyledCartEmptySection = styled.section`
  height: 80vh;
  padding: 100px 0px;
`;

export default CartEmptySection;
