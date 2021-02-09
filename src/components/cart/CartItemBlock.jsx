import React from "react";
import styled from "styled-components";
import ProductCouterInput from "../../components/product/ProductCouterInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/styles";

const CartItemBlock = ({
  item,
  index,
  onDelete,
  onBlockMinus,
  onBlockPlus,
}) => {
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
              quantity={item.card_front ? 1 : item.quantity}
              onMinus={() => {
                onBlockMinus &&
                  onBlockMinus(
                    index,
                    item.quantity,
                    item.id,
                    item.product_price
                  );
              }}
              onPlus={() => {
                onBlockPlus &&
                  onBlockPlus(
                    index,
                    item.quantity,
                    item.id,
                    item.product_price
                  );
              }}
            />
          </div>
          <div className="col-5 col-md-5">
            {item.card_price ? 0 : item.total_price}
          </div>
          <div
            className="col-2 col-md-2 cursor-pointer"
            onClick={() => {
              onDelete && onDelete(index, item.quantity, item.id);
            }}
          >
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
