import React from "react";
import Banner from "../../components/common/Banner";
import ProductListFilterSection from "./ProductListFilterSection";
import ProductListSection from "./ProductListSection";
import { banner } from "../../utils/data";
import useProductList from "../../hooks/product/useProductList";

const ProductListPage = () => {
  const { products } = useProductList();
  return (
    <main>
      <Banner image={`${banner.productList}`} text="Shop" />
      <div className="container">
        <ProductListFilterSection />
        <ProductListSection products={products} />
      </div>
    </main>
  );
};

export default ProductListPage;
