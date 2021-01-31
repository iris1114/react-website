import React from "react";
import Banner from "../../components/common/Banner";
import ProductListFilterSection from "./ProductListFilterSection";
import ProductListSection from "./ProductListSection";
import { banner } from "../../utils/data";

const ProductListPage = () => {
  return (
    <main>
      <Banner image={`${banner.productList}`} text="Shop" />
      <div className="container">
        <ProductListFilterSection />
        <ProductListSection />
      </div>
    </main>
  );
};

export default ProductListPage;
