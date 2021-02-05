import React from "react";
import styled from "styled-components";
import { Stage, Layer } from "react-konva";

const CardEditSection = () => {
  return (
    <StyledCardEditSection>
      <div className="row">
        <div className="col-12 col-md-8">
          <StyledStageSection>
            <Layer></Layer>
          </StyledStageSection>
        </div>
        <div className="col-12 col-md-4">
          <div className="d-flex flex-wrap"></div>
        </div>
      </div>
    </StyledCardEditSection>
  );
};

const StyledCardEditSection = styled.section``;
const StyledStageSection = styled(Stage)`
  width: 100%;
  height: 450px;
  background-color: #ccc;
`;

export default CardEditSection;
