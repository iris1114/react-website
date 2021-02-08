import React from "react";
import CartItemBlock from "../../components/cart/CartItemBlock";
// import CartTitleSection from "./CartTitleSection";
import styled from "styled-components";
import { defaultCarts } from "../../utils/data";
// import CartTotalSection from "./CartTotalSection";
// import useCarts from "../../hooks/cart/useCarts";
// import Loading from "../../components/common/Loading";
// import ErrorPage from "../ErrorPage";
// import { getCarts } from "../../utils/api";

const CartPage = () => {
  // const localAuthToken = localStorage.getItem("authToken");
  // const [loggedInCarts, setLoggedInCarts] = useState(null);

  // useEffect(() => {
  //   if (localAuthToken) {
  //     getCarts(localAuthToken)
  //       .then((res) => {
  //         setLoggedInCarts(res);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [localAuthToken]);

  return (
    <StyledCartPage>
      <div className="container">
        {/* {() => {
          if (localAuthToken) {
            defaultCarts.map((loggedInCart, index) => {
              return <CartItemBlock loggedInCart={loggedInCart} key={index} />;
            });
          }
        }} */}
        {defaultCarts.map((cartItem, index) => {
          return (
            <div key={index +new Date()}>
              <CartItemBlock item={cartItem} />
            </div>
          );
        })}
      </div>
    </StyledCartPage>
  );
};

const StyledCartPage = styled.main`
  padding: 50px 0px;
`;
export default CartPage;
