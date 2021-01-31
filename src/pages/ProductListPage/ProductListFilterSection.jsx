import React from "react";
import styled from "styled-components";
import ProductRatioInput from "../../components/productList/ProductRatioInput";
import { categories } from "../../utils/data";

const ProductListFilterSection = () => {
  return (
    <StyledProductListFilterSection>
      <div className="row justify-content-center">
        {categories.map((category, index) => {
          return (
            <div className="mr-2 mr-md-5" key={index}>
              <ProductRatioInput category={category} />
            </div>
          );
        })}
      </div>
    </StyledProductListFilterSection>
  );
};

const StyledProductListFilterSection = styled.section`
  padding: 50px 0px;
`;

export default ProductListFilterSection;
