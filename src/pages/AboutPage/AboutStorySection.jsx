import React from "react";
import aboutImage from "../../images/about/about.jpg";

const AboutStorySection = () => {
  return (
    <section>
      <div className="row align-items-center">
        <div className="col-12 col-md-4 mb-3">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="col-12 col-md-8">
          <h2 className="f-lg-4xl mb-3 f-2xl mb-5">Our Story</h2>
          <p className="f-lg-xl f-m mb-3">
            Tart gingerbread cake tiramisu cupcake croissant pudding bear.
            Gummies candy cotton candy cotton candy fruitcake. Donut gingerbread
            chupa chups jelly beans muffin dessert danish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
