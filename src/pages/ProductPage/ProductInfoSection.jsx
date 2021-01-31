import React from "react";
import Button from "../../components/common/Button";
import styled from "styled-components";
import ProductCouterInput from "../../components/product/ProductCouterInput";

const ProductInfoSection = ({ product }) => {
  return (
    <StyledProductInfoSection>
      <div className="mb-5">
        <h2 className="f-lg-3xl mb-2">{product.name}</h2>
        <p className="f-lg-xl mb-3">${product.price}</p>
        <p className="f-lg-l">{product.shortDescription}</p>
      </div>
      <div>
        <div className="mb-5">
          <ProductCouterInput />
        </div>

        <Button text="Add To Cart" variant="primary" />
      </div>
    </StyledProductInfoSection>
  );
};

const StyledProductInfoSection = styled.section`
  padding: 30px 15px;
`;

export default ProductInfoSection;
