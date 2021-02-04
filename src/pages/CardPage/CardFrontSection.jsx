import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

import defaultCard from "../../images/card/defaultCard.jpg";
import { cardFrontImages } from "../../utils/data";
import { COLOR } from "../../utils/styles";


const CardFrontSection = () => {

  const [cardImage, setCardImage] = useState(defaultCard);

  const handleUploadImageChange = (e) => {
    const file = e.target.files[0];
    const img =  URL.createObjectURL(file);
    setCardImage(img);
    e.target.value = null;

  }

  const handleDefaultImageChange = (image) => {
    console.log(image)
    setCardImage(image);
  };
  

 
  return (
    <StyledCardFrontSection>
      <div className="row">
        <div className="col-12 col-md-7 card-bg">
            <img src={cardImage} alt="card"/>
        </div>

        <div className="col-12 col-md-5 select-area">
          <div className="text-center">
            <input type="file" id="upload" className="icon d-none" onChange={handleUploadImageChange}/>
            <label htmlFor="upload" className="d-flex align-items-center justify-content-center m-3">
              <FontAwesomeIcon className="icon" icon={faUpload} size="lg"/>
              <p>upload your photo</p>
            </label>
          </div>

          <div className=" d-flex flex-wrap">
            {
              cardFrontImages.map((image,index)=>{
                return(
                  <div key={index} className="col-6 mb-3 option-card" onClick={()=>{handleDefaultImageChange(image)}}> 
                    <img src={image && image} alt="card" />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </StyledCardFrontSection>
  );
};

const StyledCardFrontSection = styled.section`
  .card-bg{
    background-color: #f7f7f7;
    width: 100%;
    height: 450px;
    position: relative;
    overflow: hidden;

  }

  .select-area{
    background-color: ${COLOR.darkBrown};
    width: 100%;
    height: 450px;
    overflow: scroll;

    label{
      cursor: pointer;
      background-color: ${COLOR.nude};
      border-radius: 4px;

      &:hover{
        color: ${COLOR.darkGold};
      }
      .icon{
        margin: 10px;
      }

    }

   

    .option-card{
      cursor: pointer;
      
    }

  }
`;

export default CardFrontSection;