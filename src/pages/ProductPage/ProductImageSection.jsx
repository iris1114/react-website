import React from "react";
import styled from "styled-components";

const ProductImageSection = ({ product }) => {
  console.log({ product });
  return (
    <StyledProductImageSection className="d-flex flex-column flex-md-row">
      <div className="d-flex col-12 col-md-3 order-1 flex-md-column order-md-0">
        {product.images.map((image, index) => {
          return (
            <div className="small-image mb-2 m-1" key={index}>
              <img src={image} alt={product.name} />
            </div>
          );
        })}
      </div>

      <div className="col-12 col-md-9 mb-3">
        <img src={product.images[0]} alt={product.name} />
      </div>
    </StyledProductImageSection>
  );
};

const StyledProductImageSection = styled.section`
  .small-image {
    cursor: pointer;
  }
`;

export default ProductImageSection;
