import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/common/Button";
import custom1Img from "../../images/homePage/custom1.jpg";
import custom2Img from "../../images/homePage/custom2.jpg";
import custom3Img from "../../images/homePage/custom3.jpg";

const HomeCardSection = () => {
  return (
    <StyledHomeCardSection>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="images-group">
              <div className="image image1">
                <img src={custom1Img} alt="custom-card" />
              </div>
              <div className="image image2">
                <img src={custom2Img} alt="custom-card" />
              </div>
              <div className="image image3">
                <img src={custom3Img} alt="custom-card" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="f-lg-6xl f-xl mb-5">Custom Your Card</h3>
            <Link to="/card">
              <Button text="Go To Custom" />
            </Link>
          </div>
        </div>
      </div>
    </StyledHomeCardSection>
  );
};

const StyledHomeCardSection = styled.section`
  text-align: center;
  padding: 100px 0px;

  .img-group {
    position: relative;

    .img {
      position: absolute;
      top: 0px;
    }
  }
`;

export default HomeCardSection;
