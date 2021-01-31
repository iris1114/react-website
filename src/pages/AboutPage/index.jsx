import React from "react";
import Banner from "../../components/common/Banner";
import { banner } from "../../utils/data";
import AboutStorySection from "./AboutStorySection";

const AboutPage = () => {
  return (
    <main>
      <Banner image={`${banner.about}`} text="About" />
      <div className="container">
        <AboutStorySection />
      </div>
    </main>
  );
};

export default AboutPage;
