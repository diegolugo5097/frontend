import React, { useState, useEffect } from "react";
import Navigate from "../../components/Navigation/Navbar";
import { getProducts } from "../../core/products/product";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";
import "./Home.css";

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
    <>
      <div>
        <Navigate />
        <Banner />
        <div className="container">
          <div className="title-products text-center mt-5">
            <hr class="sep-2" />
            <label>ESTOS SON NUESTROS PRODUCTOS</label>
            <hr class="sep-2" />
          </div>
          <div className="card-deck">
            <div className="row d-flex justify-content-center">
              {product.map((product, i) => (
                <div key={i} className="mt-4">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
