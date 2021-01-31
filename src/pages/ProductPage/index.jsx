import React from "react";
import styled from "styled-components";
import { product } from "../../utils/data";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";

const ProductPage = () => {
  // const productId = useParams();
  console.log({ product });
  return (
    <StyledProductPage>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-8">
            <ProductImageSection product={product} />
          </div>
          <div className="col-12 col-md-4">
            <ProductInfoSection product={product} />
          </div>
        </div>
        <ProductDescriptionSection product={product} />
      </div>
    </StyledProductPage>
  );
};

const StyledProductPage = styled.main`
  padding: 50px 0px 100px;
`;

export default ProductPage;
