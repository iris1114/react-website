import React, { useContext } from "react";
import CartItemBlock from "../../components/cart/CartItemBlock";
import CartTitleSection from "./CartTitleSection";
import styled from "styled-components";
import CartTotalSection from "./CartTotalSection";
import AuthContext from "../../components/auth/AuthContext";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import useCarts from "../../hooks/cart/useCarts";
import Loading from "../../components/common/Loading";
import ErrorPage from "../ErrorPage";
// import CartsContext from "../../components/cart/CartsContext";

const CartPage = () => {
  const { authData } = useContext(AuthContext);
  const authToken = authData.access_token;
  const { cartsData, loading, error, emptyCarts } = useCarts(authToken);

  return (
    <StyledCartPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          {emptyCarts ? (
            <div className="text-center">
              <p className="mb-5">
                The cart is now empty. Select some products to buy before
                checking out.
              </p>
              <Link to="/shop">
                <Button text="Go To Shop" />
              </Link>
            </div>
          ) : (
            <>
              <CartTitleSection />
              {cartsData.map((cartItem, index) => {
                return (
                  <div key={index + new Date()}>
                    <CartItemBlock item={cartItem} />
                  </div>
                );
              })}
              <CartTotalSection />
            </>
          )}
        </div>
      )}
    </StyledCartPage>
  );
};

const StyledCartPage = styled.main`
  padding: 50px 0px;
`;
export default CartPage;
