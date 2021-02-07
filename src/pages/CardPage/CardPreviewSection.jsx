import React from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";
import defaultFrontImg from "../../images/card/defaultFront.jpg";
import defaultBackImage from "../../images/card/defaultBack.png";
import Button from "../../components/common/Button";

const CardPreviewSection = ({ frontImage, backImage }) => {
  const dowloadFrontClick = (e) => {
    let element = document.createElement("a");
    let file = new Blob([frontImage], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "card_front.jpg";
    element.click();
  };
  const dowloadBackClick = () => {
    let element = document.createElement("a");
    let file = new Blob([backImage], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "card_back.jpg";
    element.click();
  };
  return (
    <StyledCardPreviewSection>
      <h3 className="f-lg-3xl text-center mb-3">Preview</h3>
      <div className="d-flex flex-wrap mb-3 mb-md-1">
        <div className="col-12 col-md-6 mb-3">
          <img src={frontImage ? frontImage : defaultFrontImg} alt="front" />
        </div>
        <div className="col-12 col-md-6">
          <img src={backImage ? backImage : defaultBackImage} alt="front" />
        </div>
      </div>
      <div className="d-flex flex-wrap mb-3">
        <div className="col-12 col-md-6 text-center">
          <a href={frontImage} download onClick={dowloadFrontClick}>
            <Button text="Download-fron" />
          </a>
        </div>
        <div className="col-12 col-md-6 text-center">
          <a href={backImage} download onClick={dowloadBackClick}>
            <Button text="Download-back" />
          </a>
        </div>
      </div>
      <div className="text-center">
        <Button text="Add To Cart" />
      </div>
    </StyledCardPreviewSection>
  );
};

const StyledCardPreviewSection = styled.section`
  margin: 50px 0px;
  background-color: ${COLOR.darkBrown};
  padding: 15px;
`;

export default CardPreviewSection;
