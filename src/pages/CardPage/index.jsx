import React from "react";
import CardEditSection from "./CardEditSection";
import CardFrontSection from "./CardFrontSection";
import CardPreviewSection from "./CardPreviewSection";

const CardPage = () => {
  return <main>
    <div className="container">
      <div className="m-3">
        <CardFrontSection />
      </div>
      <CardEditSection/>
      <div className="m-3">
      <CardPreviewSection/>
      </div>
    </div>
  </main>;
};

export default CardPage;
