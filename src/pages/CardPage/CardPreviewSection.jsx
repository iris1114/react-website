import React, { useContext } from "react";
import styled from "styled-components";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import defaultFrontImg from "../../images/card/defaultFront.jpg";
import defaultBackImage from "../../images/card/defaultBack.png";
import Button from "../../components/common/Button";
import AuthContext from "../../components/auth/AuthContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { addCardToCart } from "../../utils/api";

const CardPreviewSection = ({ frontImage, backImage }) => {
  const { authData, setAuthData } = useContext(AuthContext);
  const history = useHistory();

  const handleDownloadClick = () => {
    let element = document.createElement("a");
    element.click();
  };

  const handleCartClick = () => {
    if (!frontImage || !frontImage) {
      Swal.fire({
        icon: "warning",
        title: "Please custom your card",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (authData.access_token) {
        Swal.fire({
          icon: "success",
          title: "Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setAuthData({
          ...authData,
          num_carts: authData.num_carts + 1,
        });

        addCardToCart(authData.access_token, frontImage, backImage);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Please Login.",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/login");
      }
    }
  };

  return (
    <StyledCardPreviewSection>
      <h3 className="f-lg-3xl text-center mb-3">Preview</h3>
      <div className="d-flex flex-wrap mb-3 mb-md-1">
        <div className="col-12 col-md-6 mb-3">
          <img
            src={frontImage ? frontImage : defaultFrontImg}
            alt="front"
            className="front-card"
          />
        </div>
        <div className="col-12 col-md-6">
          <img src={backImage ? backImage : defaultBackImage} alt="front" />
        </div>
      </div>
      <div className="d-flex flex-wrap mb-3">
        <div className="col-12 col-md-6 text-center">
          <a href={frontImage} download onClick={handleDownloadClick}>
            <Button text="Download-fron" />
          </a>
        </div>
        <div className="col-12 col-md-6 text-center">
          <a href={backImage} download onClick={handleDownloadClick}>
            <Button text="Download-back" />
          </a>
        </div>
      </div>
      <div className="text-center" onClick={handleCartClick}>
        <Button text="Add To Cart" />
      </div>
    </StyledCardPreviewSection>
  );
};

const StyledCardPreviewSection = styled.section`
  margin: 50px 0px;
  background-color: ${COLOR.darkBrown};
  padding: 15px;

  .front-card {
    height: 357px;
    position: relative;
    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      height: 250px;
    }
  }
`;

export default CardPreviewSection;
