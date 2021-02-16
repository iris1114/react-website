import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const ProductDescriptionSection = ({ product }) => {
  return (
    <StyledProductDescriptionSection>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Description">
          <p className="mt-4 f-lg-m">{product.description}</p>
        </Tab>
        <Tab eventKey="profile" title="Additional information">
          <div className="mt-4 f-lg-m">
            <p>Weight: {product.weight}</p>
            <p>Dimensions: {product.dimensions}</p>
          </div>
        </Tab>
      </Tabs>
    </StyledProductDescriptionSection>
  );
};

const StyledProductDescriptionSection = styled.section`
  .nav-tabs {
    border-bottom: 1px solid ${COLOR.gold};

    .nav-link {
      &.active,
      &:hover {
        border-color: ${COLOR.gold} ${COLOR.gold} ${COLOR.white};
        color: ${COLOR.gold};
        background-color: ${COLOR.white};
      }
    }
  }
`;

export default ProductDescriptionSection;
