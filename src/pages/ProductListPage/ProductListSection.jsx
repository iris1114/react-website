import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productList/ProductCard";

const ProductListSection = ({ products }) => {
  return (
    <div className="row justify-content-center justify-content-xl-start">
      {products &&
        products.map((product, index) => {
          return (
            <Link to={`/shop/${product.id}`} key={index}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductListSection;
