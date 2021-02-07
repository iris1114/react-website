import React, { useState } from "react";
import Loading from "../../components/common/Loading";
import useCard from "../../hooks/card/useCard";
import ErrorPage from "../ErrorPage";
import CardBackSection from "./CardBackSection";
import CardFrontSection from "./CardFrontSection";
import CardPreviewSection from "./CardPreviewSection";

const CardPage = () => {
  const { frontCards, decorations, loading, error } = useCard();
  const [backImage, setBackImage] = useState(null);
  const [frontImage, setFrontImage] = useState(null);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          <CardFrontSection
            frontCards={frontCards}
            onFrontPreview={(image) => {
              setFrontImage(image);
            }}
          />
          <CardBackSection
            decorations={decorations}
            onBackPreview={(image) => {
              setBackImage(image);
            }}
          />
          <CardPreviewSection frontImage={frontImage} backImage={backImage} />
        </div>
      )}
    </main>
  );
};

export default CardPage;
