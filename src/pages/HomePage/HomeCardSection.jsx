import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/common/Button";
import custom1Img from "../../images/homePage/custom1.jpg";
import custom2Img from "../../images/homePage/custom2.jpg";
import custom3Img from "../../images/homePage/custom3.jpg";
import custom4Img from "../../images/homePage/custom4.png";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { BREAKPOINTS } from "../../utils/styles";

const HomeCardSection = () => {
  return (
    <StyledHomeCardSection>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="images-group" id="test">
              <Controller>
                <Scene duration="100%" triggerElement="#test" triggerHook={1}>
                  <Timeline>
                    <Tween from={{ y: 300 }} to={{ y: 0 }}>
                      <div className="image image1">
                        <img src={custom1Img} alt="custom-card" />
                      </div>
                    </Tween>
                    <Tween from={{ y: 300 }} to={{ y: 0 }}>
                      <div className="image image2">
                        <img src={custom3Img} alt="custom-card" />
                      </div>
                    </Tween>
                    <Tween from={{ y: 300 }} to={{ y: 0 }}>
                      <div className="image image3">
                        <img src={custom2Img} alt="custom-card" />
                      </div>
                    </Tween>
                    <Tween from={{ y: 300 }} to={{ y: 0 }}>
                      <div className="image image4">
                        <img src={custom4Img} alt="custom-card" />
                      </div>
                    </Tween>
                  </Timeline>
                </Scene>
              </Controller>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="f-lg-6xl f-2xl mb-5">Custom Your Card</h3>
            <p className="f-lg-2xl f-m mb-5">
              Create and send your own personalized photo cards and greeting
              cards to your friends.
            </p>
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
  padding: 100px 0px 500px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    padding: 100px 0px 300px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 100px 0px 200px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 100px 0px 100px;
  }

  .images-group {
    position: relative;
    min-height: 300px;

    .image {
      position: absolute;
      top: 0px;

      &.image1 {
        transform: rotate(-20deg);
      }
      &.image2 {
        transform: rotate(-15deg);
      }
      &.image3 {
        transform: rotate(-5deg);
      }
      &.image4 {
        transform: rotate(5deg);
      }
    }
  }
`;

export default HomeCardSection;
