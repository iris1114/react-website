import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { GOOGLE_MAP_KEY } from "../../utils/key";

const AboutMapSection = () => {
  const center = {
    lat: 25.033976,
    lng: 121.5623502,
  };

  const googleMapKey =
    process.env.NODE_ENV === "development"
      ? GOOGLE_MAP_KEY
      : process.env.REACT_APP_GOOGLE_MAP_KEY;

  return (
    <StyledAboutMapSection>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 f-lg-4xl f-2xl mb-3">
            <h3 className="f-lg-4xl f-2xl mb-3">Visit Us</h3>
            <div className="f-lg-xl f-m mb-3">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.google.com/maps/dir//110%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E4%BF%A1%E7%BE%A9%E8%B7%AF%E4%BA%94%E6%AE%B57%E8%99%9F/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3442abb6da9c9e1f:0x1206bcf082fd10a6?sa=X&ved=2ahUKEwjRmvGw_czuAhXkIqYKHVBhA0gQwwUwAHoECBUQAg"
              >
                <p>Taipei 101, 1F</p>
                <p>No.7, Sec. 5, Xinyi Rd.,</p>
                <p>Xinyi Dist., Taipei City 110, Taiwan (R.O.C.) </p>
              </a>
              <a href="mailto:sweetjane@example.com">service@secret-cake.com</a>
              <a href="tel:+886212345678">02-12345678</a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapKey }}
                defaultCenter={center}
                defaultZoom={17}
              >
                <GoogleMapTarget
                  lat={25.033976}
                  lng={121.5623502}
                  text="secret cake"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutMapSection>
  );
};

const GoogleMapTarget = ({ text }) => (
  <div className="target">
    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
    <p>{text}</p>
  </div>
);

const StyledAboutMapSection = styled.section`
  padding: 50px 0px 100px;

  .map {
    height: 300px;
    width: 100%;
    max-width: 500px;
  }

  .target {
    color: ${COLOR.red};
  }

  a {
    display: block;
    color: ${COLOR.darkBrown};

    &:hover {
      color: ${COLOR.gold};
    }
  }
`;

export default AboutMapSection;
