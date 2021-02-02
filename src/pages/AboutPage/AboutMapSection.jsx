import React from "react";
import GoogleMapReact from "google-map-react";
import { KEY } from "../../utils/key";

const AboutMapSection = () => {
  const center = {
    lat: 25.033976,
    lng: 121.5623502,
  };
  const zoom = 18;

  return (
    <section>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={25.033976}
            lng={121.5623502}
            text="secret cake"
          />
        </GoogleMapReact>
      </div>
    </section>
  );
};

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>{text}</div>
);

export default AboutMapSection;
