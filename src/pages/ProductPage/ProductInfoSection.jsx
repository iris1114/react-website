import React, { useState, useContext } from "react";
import Button from "../../components/common/Button";
import styled from "styled-components";
import ProductCouterInput from "../../components/product/ProductCouterInput";
import AuthContext from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { addProductToCart } from "../../utils/api";

const ProductInfoSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { authData, setAuthData } = useContext(AuthContext);
  const history = useHistory();

  const handleCartClick = () => {
    if (authData.access_token) {
      Swal.fire({
        icon: "success",
        title: "Added Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      setAuthData({
        ...authData,
        num_carts: authData.num_carts + quantity,
      });

      addProductToCart(authData.access_token, product.id, quantity);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please Login.",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/login");
    }
  };

  return (
    <StyledProductInfoSection>
      <div className="mb-5">
        <h2 className="f-lg-3xl mb-2">{product.name}</h2>
        <p className="f-lg-xl mb-3">${product.price}</p>
        <p className="f-lg-l">{product.shortDescription}</p>
      </div>
      <div>
        <div className="mb-5">
          <ProductCouterInput
            quantity={quantity}
            onMinus={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              } else {
                setQuantity(1);
              }
            }}
            onPlus={() => {
              setQuantity(quantity + 1);
            }}
          />
        </div>
        <div onClick={handleCartClick}>
          <Button text="Add To Cart" variant="primary" />
        </div>
      </div>
    </StyledProductInfoSection>
  );
};

const StyledProductInfoSection = styled.section`
  padding: 30px 15px;
`;

export default ProductInfoSection;
