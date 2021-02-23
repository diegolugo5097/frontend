import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/product.js";

const Products = ({ setCurrentId }) => {
  const products = useSelector((state) => state.products);
  return !products.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      {products.map((product) => {
        return <Product product={product} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

export default Products;
