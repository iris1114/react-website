import styled from "styled-components";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import HeroCake from "../../images/homePage/hero1.png";
import HeroDeco1 from "../../images/homePage/hero2.png";
import HeroDeco2 from "../../images/homePage/hero3.png";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <StyledHomeHeroSection>
      <div className="images-area">
        <div className="deco1">
          <img src={HeroDeco1} alt="deco" />
        </div>
        <div className="cake">
          <img src={HeroCake} alt="cake" />
        </div>
        <div className="deco2">
          <img src={HeroDeco2} alt="deco" />
        </div>
      </div>

      <div className="text-area">
        <p className="f-lg-6xl f-2xl"> Get Your Own </p>
        <p className="f-lg-6xl f-2xl mb-5">Slice of Heaven</p>
        <Link to="/shop">
          <Button text="shop now" />
        </Link>
      </div>
    </StyledHomeHeroSection>
  );
};

const StyledHomeHeroSection = styled.section`
  text-align: center;
  background-color: ${COLOR.lightYellow};
  padding: 100px 0px 0px;
  display: flex;
  flex-wrap: wrap;

  .images-area {
    display: flex;
    justify-content: center;
    position: relative;
    left: 10%;
    padding-top: 50px;

    @media (max-width: ${BREAKPOINTS.xl}px) {
      left: 0%;
    }

    .deco1 {
      position: relative;
      left: 8%;
      top: -20%;
      animation: bounceInLeft 2s linear;
    }
    .deco2 {
      position: relative;
      left: -10%;
      top: 20%;
      animation: bounceInRight 2s linear;
    }
    .cake {
      z-index: 1;
      animation: backInDown 2s linear;
      @media (max-width: ${BREAKPOINTS.sm}px) {
        width: 250%;
      }
    }
  }

  .text-area {
    position: relative;
    left: 6%;
    top: -240px;
    z-index: 2;

    @media (max-width: ${BREAKPOINTS.xl}px) {
      left: 0%;
      top: 0%;
      margin: auto;
    }
  }
`;

export default HomeHeroSection;
