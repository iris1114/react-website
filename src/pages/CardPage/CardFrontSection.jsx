import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import Button from "../../components/common/Button";
import { v4 as uuidv4 } from "uuid";
import { cardFrontImages, defaultFrontImage } from "../../utils/data";
import Swal from "sweetalert2";

const CardFrontSection = ({ onFrontPreview }) => {
  const [cardImage, setCardImage] = useState(defaultFrontImage);

  const handleUploadImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCardImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDefaultImageChange = (image) => {
    setCardImage(image);
  };

  const handleDoneClick = () => {
    onFrontPreview && onFrontPreview(cardImage);
    Swal.fire({
      icon: "success",
      title: "Custom Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleClearClick = () => {
    setCardImage(defaultFrontImage);
    onFrontPreview && onFrontPreview(defaultFrontImage);
  };

  return (
    <StyledCardFrontSection>
      <h3 className="f-lg-3xl text-center mb-3">Card - Front</h3>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-12 col-md-7">
          <img src={cardImage} alt="card" className="card-area" />
        </div>

        <div className="col-12 col-md-5 select-area">
          <div className="text-center">
            <input
              type="file"
              id="upload"
              className="icon d-none"
              onChange={handleUploadImageChange}
            />
            <label
              htmlFor="upload"
              className="d-flex align-items-center justify-content-center m-3"
            >
              <FontAwesomeIcon className="icon" icon={faUpload} size="lg" />
              <p>upload your photo</p>
            </label>
          </div>

          <div className=" d-flex flex-wrap">
            {cardFrontImages.map((image) => {
              return (
                <div
                  key={uuidv4()}
                  className="col-6 mb-3 option-card"
                  onClick={() => {
                    handleDefaultImageChange(image);
                  }}
                >
                  <img src={image} alt="card" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center m-2">
          <div className="mr-2">
            <Button text="Clear" onButtonClick={handleClearClick} />
          </div>
          <Button
            text="Done"
            variant="primary"
            onButtonClick={handleDoneClick}
          />
        </div>
      </div>
    </StyledCardFrontSection>
  );
};

const StyledCardFrontSection = styled.section`
  margin: 50px 0px;
  background-color: ${COLOR.darkBrown};
  padding: 15px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin: 30px 0px;
    padding: 15px 0px;
  }

  .card-area {
    height: 420px;
    position: relative;
    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.xl}px) {
      height: 345px;
    }

    @media (max-width: ${BREAKPOINTS.md}px) {
      height: 245px;
    }
  }

  .select-area {
    background-color: ${COLOR.lightBrown};
    width: 100%;
    height: 450px;
    overflow: scroll;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      height: 380px;
    }

    label {
      cursor: pointer;
      background-color: ${COLOR.nude};
      border-radius: 4px;

      &:hover {
        color: ${COLOR.darkGold};
      }
      .icon {
        margin: 10px;
      }
    }

    .option-card {
      cursor: pointer;
    }
  }
`;

export default CardFrontSection;
