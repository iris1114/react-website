import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productList/ProductCard";

const ProductListSection = ({ products }) => {
  return (
    <div className="row justify-content-center justify-content-xl-start">
      {products &&
        products.map((product, index) => {
          console.log({ product });
          return (
            <Link to={`/shop/${product.id}`} key={index}>
              <ProductCard
                image={product.fields.images[0].url}
                name={product.fields.name}
                price={product.fields.price}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductListSection;
