import React from "react";
import Banner from "../../components/common/Banner";
import { banner } from "../../utils/data";
import AboutMapSection from "./AboutMapSection";
import AboutStorySection from "./AboutStorySection";

const AboutPage = () => {
  return (
    <main>
      <Banner image={`${banner.about}`} text="About" />
      <div className="container">
        <AboutStorySection />
        <AboutMapSection />
      </div>
    </main>
  );
};

export default AboutPage;
