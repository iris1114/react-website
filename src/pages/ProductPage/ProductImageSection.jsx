import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductImageSection = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  console.log({ product });

  return (
    <StyledProductImageSection className="d-flex flex-column flex-md-row">
      <div className="d-flex col-12 col-md-3 order-1 flex-md-column order-md-0">
        {product.images.map((image, index) => {
          return (
            <div
              className="small-image mb-2 m-1"
              key={index}
              onClick={() => {
                setMainImage(image);
              }}
            >
              <img src={image} alt={product.name} />
            </div>
          );
        })}
      </div>

      <div className="col-12 col-md-9 mb-3 ">
        <img className="main-image" src={mainImage} alt={product.name} />
      </div>
    </StyledProductImageSection>
  );
};

const StyledProductImageSection = styled.section`
  .small-image {
    cursor: pointer;
    border: 1px solid ${COLOR.nude};
  }
  .main-image {
    border: 1px solid ${COLOR.nude};
  }
`;

export default ProductImageSection;
