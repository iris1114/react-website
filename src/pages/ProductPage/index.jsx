import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../components/common/Loading";
import useProduct from "../../hooks/useProduct";
import ErrorPage from "../ErrorPage";
import ProductDescriptionSection from "./ProductDescriptionSection";
import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";

const ProductPage = () => {
  const param = useParams();
  const productId = param.productId;
  const { product, loading, error } = useProduct(productId);

  return (
    <StyledProductPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
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
      )}
    </StyledProductPage>
  );
};

const StyledProductPage = styled.main`
  padding: 50px 0px 100px;
`;

export default ProductPage;
