import React from "react";
import Banner from "../../components/common/Banner";
// import ProductListFilterSection from "./ProductListFilterSection";
import ProductListSection from "./ProductListSection";
import { banner } from "../../utils/data";
import useProductList from "../../hooks/useProductList";
import Loading from "../../components/common/Loading";
import ErrorPage from "../ErrorPage";

const ProductListPage = () => {
  const { products, loading, error } = useProductList();

  return (
    <main>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <>
          <Banner image={`${banner.productList}`} text="Shop" />
          <ProductListSection products={products} />
        </>
      )}
    </main>
  );
};

export default ProductListPage;
