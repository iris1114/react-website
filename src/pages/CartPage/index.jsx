import React from "react";
import CartItemBlock from "../../components/cart/CartItemBlock";
import CartTitleSection from "./CartTitleSection";
import styled from "styled-components";
import CartTotalSection from "./CartTotalSection";

const CartPage = () => {
  return (
    <StyledCartPage>
      <div className="container">
        <CartTitleSection />
        <CartItemBlock />
        <CartTotalSection />
      </div>
    </StyledCartPage>
  );
};

const StyledCartPage = styled.main`
  padding: 50px 0px;
`;
export default CartPage;
