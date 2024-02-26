import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ProductCouterInput from "../../components/product/ProductCouterInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "../../utils/styles";
import AuthContext from "../../contexts/AuthContext";
import useCartCard from "../../hooks/useCartCard";
import Loading from "../../components/common/Loading";
import ErrorPage from "../../pages/ErrorPage";
import useProductList from "../../hooks/useProductList";
import CartsContext from "../../contexts/CartsContext";

const CartItemBlock = ({
  item,
  index,
  onDelete,
  onBlockMinus,
  onBlockPlus,
}) => {
  const { authData } = useContext(AuthContext);
  const authToken = authData.access_token;
  const { cards, loading, error } = useCartCard(authToken);
  const {
    products,
    loading: productLoading,
    error: productError,
  } = useProductList();

  const defaultCartData = {
    img: null,
    name: "",
    price: 0,
  };

  const [cartData, setCartData] = useState(defaultCartData);
  const { setCartsData } = useContext(CartsContext);

  useEffect(() => {
    if (cards && products) {
      const selectCard = cards.find(
        (card) => card.id === item.card_id && item.product_id === null
      );

      const selectProduct = products.find(
        (product) => product.id === item.product_id && item.card_id === null
      );

      if (selectCard) {
        setCartData((prevCartData) => ({
          ...prevCartData,
          img: selectCard.front,
          name: selectCard.name,
          price: selectCard.price,
        }));
      } else if (selectProduct) {
        setCartData((prevCartData) => {
          return {
            ...prevCartData,
            img: selectProduct.main_image,
            name: selectProduct.name,
            price: selectProduct.price,
          };
        });
      }
    }
  }, [cards, products, item.card_id, item.product_id]);

  useEffect(() => {
    const newTotalPrice = item.quantity * cartData.price;
    setCartsData((prevCartsData) => {
      return prevCartsData.map((cart, i) =>
        i === index ? { ...cart, total_price: newTotalPrice } : cart
      );
    });
  }, [item.quantity, cartData.price, index, setCartsData]);

  const getTotalPrice = (item) => {
    return item.quantity * cartData.price;
  };

  return (
    <main>
      {loading || productLoading ? (
        <Loading />
      ) : error || productError ? (
        <ErrorPage />
      ) : (
        <StyledCartItemBlock>
          <div className="row align-items-center text-center">
            <div className="col-12 col-md-7 mb-3 mb-md-0  d-flex align-items-center">
              <div className="col-5 col-md-3">
                <img className="item-image" src={cartData.img} alt="item" />
              </div>
              <div className="col-5 col-md-4">{cartData.name}</div>
              <div className="col-2 col-md-5">
                ${cartData.price.toLocaleString()}
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
              <div className="col-5 col-md-5">
                {item.type === "card" ? (
                  <div className="card-quantity">{item.quantity}</div>
                ) : (
                  <ProductCouterInput
                    quantity={item.quantity}
                    onMinus={() => {
                      onBlockMinus &&
                        onBlockMinus(
                          index,
                          item.quantity,
                          item.id,
                          cartData.price
                        );
                    }}
                    onPlus={() => {
                      onBlockPlus &&
                        onBlockPlus(
                          index,
                          item.quantity,
                          item.id,
                          cartData.price
                        );
                    }}
                  />
                )}
              </div>
              <div className="col-5 col-md-5">${getTotalPrice(item)}</div>
              <div
                className="col-2 col-md-2 cursor-pointer"
                onClick={() => {
                  onDelete && onDelete(index, item.quantity, item.id);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  className="trash-icon"
                />
              </div>
            </div>
          </div>
        </StyledCartItemBlock>
      )}
    </main>
  );
};

const StyledCartItemBlock = styled.div`
  margin: 30px 0px;
  padding: 20px 0px;
  border-bottom: 1px solid ${COLOR.nude};

  .item-image {
    max-height: 110px;
  }

  .card-quantity {
    color: ${COLOR.gold};
  }

  .trash-icon {
    &:hover {
      color: ${COLOR.gold};
    }
  }
`;

export default CartItemBlock;
