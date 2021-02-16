import React from "react";
import styled from "styled-components";
import ProductRatioInput from "../../components/productList/ProductRatioInput";
import { categories } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";

const ProductListFilterSection = () => {
  return (
    <StyledProductListFilterSection>
      <div className="row justify-content-center">
        {categories.map((category) => {
          return (
            <div className="mr-2 mr-md-5" key={uuidv4()}>
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
