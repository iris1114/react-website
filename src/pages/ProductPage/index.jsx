import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProduct from "../../hooks/product/useProduct";
// import ProductDescriptionSection from "./ProductDescriptionSection";
// import ProductImageSection from "./ProductImageSection";
// import ProductInfoSection from "./ProductInfoSection";

const ProductPage = () => {
  const param = useParams();
  const productId = param.productId;
  const {product} = useProduct(productId);
  console.log(product);
  
  return (
    <StyledProductPage>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-8">
            {/* <ProductImageSection product={product} /> */}
          </div>
          <div className="col-12 col-md-4">
            {/* <ProductInfoSection product={product} /> */}
          </div>
        </div>
        {/* <ProductDescriptionSection product={product} /> */}
      </div>
    </StyledProductPage>
  );
};

const StyledProductPage = styled.main`
  padding: 50px 0px 100px;
`;

export default ProductPage;
