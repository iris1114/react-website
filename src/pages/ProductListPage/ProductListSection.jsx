import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productList/ProductCard";
import { v4 as uuidv4 } from "uuid";

const ProductListSection = ({ products }) => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center justify-content-xl-start">
          {products &&
            products.map((product) => {
              return (
                <Link to={`/shop/${product.id}`} key={uuidv4()}>
                  <ProductCard
                    image={product.main_image}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductListSection;
