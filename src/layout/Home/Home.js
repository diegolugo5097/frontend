import React, { useState, useEffect } from "react";
import Navigate from "../../components/Navigation/Navbar";
import { fetchProducts } from "../../api/products/product";
import { fetchAbouts } from "../../api/aboutUs/about";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Abouts from "../../pages/Admin/DashboardAbout/index";
import "./Home.css";

const Home = (req, res) => {
  // function load state
  const [product, setProducts] = useState([]);
  const [about, setAbout] = useState([]);
  const [error, setError] = useState([]);

  const loadProducts = () => {
    fetchProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
      }
    });
  };

  const loadAbouts = () => {
    fetchAbouts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAbout(data.data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
    loadAbouts();
  }, []);

  // function load api
  return (
    <>
      <div>
        <Navigate />
        <Banner />
        <div className="container">
          <div className="title-products text-center mt-5">
            <hr className="sep-2" />
            <label>ESTOS SON NUESTROS PRODUCTOS</label>
            <hr className="sep-2" />
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
          <div className="title-products text-center mt-5">
            <hr className="sep-2" />
            <label>SOBRE NOSOTROS</label>
            <hr className="sep-2" />
          </div>
          <div>
            <div className="about justify-content-center text-white">
              {about.map((about) => {
                return <p>{about.description}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
