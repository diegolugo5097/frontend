import React, { useState, useEffect } from "react";
import Navigate from "../layout/Navbar";
import { getProducts } from "./ApiCore";
import Card from "./Card";

const Home = (req, res) => {
  // function load state
  const [product, setProducts] = useState([]);
  const [error, setError] = useState([]);

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);
  // function load api
  return (
    <div>
      <Navigate />
      <div className="container">
        <div className="row">
          {product.map((product, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
