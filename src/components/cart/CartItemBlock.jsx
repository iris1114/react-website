import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ProductCouterInput from "../../components/product/ProductCouterInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/styles";
import CartsContext from "./CartsContext";

const CartItemBlock = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [totalPrice, setTotalPrice] = useState(item.total_price);

  // const { cartsData, setCartsData } = useContext(CartsContext);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setTotalPrice(item.product_price * quantity);
    // for (const index in cartsData) {
    //   cartsData[index].total_price = totalPrice;
    // setCartsData({item.total_price: totalPrice});
    // }
  }, [quantity]);

  console.log();

  return (
    <StyledCartItemBlock>
      <div className="row align-items-center text-center">
        <div className="col-12 col-md-7 mb-3 mb-md-0  d-flex align-items-center">
          <div className="col-5 col-md-3">
            <img src={item.card_front || item.product_main_image} alt="item" />
          </div>
          <div className="col-5 col-md-4">
            {item.card_name || item.product_name}
          </div>
          <div className="col-2 col-md-5">
            {item.card_price || item.product_price}
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="col-5 col-md-5">
            <ProductCouterInput
              quantity={item.card_front ? 1 : quantity}
              onMinus={handleMinusClick}
              onPlus={handlePlusClick}
            />
          </div>
          <div className="col-5 col-md-5">
            {item.card_price ? 0 : totalPrice}
          </div>
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
