import React, { useContext } from "react";
import CartTitleSection from "./CartTitleSection";
import styled from "styled-components";
import CartTotalSection from "./CartTotalSection";
import AuthContext from "../../contexts/AuthContext";
import useCarts from "../../hooks/useCarts";
import Loading from "../../components/common/Loading";
import ErrorPage from "../ErrorPage";
import CartItemsSection from "./CartItemsSection";
import CartEmptySection from "./CartEmptySection";

const CartPage = () => {
  const { authData } = useContext(AuthContext);
  const authToken = authData.access_token;
  const { loading, error, emptyCarts } = useCarts(authToken);

  return (
    <StyledCartPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          {emptyCarts ? (
            <CartEmptySection />
          ) : (
            <>
              <CartTitleSection />
              <CartItemsSection />
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
