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
        <div className="container">
          <div className="text-center mt-5 p-5">
            <h2 class="text-center wow fadeIn">NUESTROS PRODUCTOS</h2>
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
          <div>
            <div className="about justify-content-center">
              {about.map((about) => {
                return (
                  <div class="page-section no-scroll">
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-lg-7 wow fadeIn">
                          <div class="img-place">
                            <img
                              src="https://i.postimg.cc/135zZr88/148417647-3921406387881597-2493552089432428205-n.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="col-lg-5 pl-lg-5 wow fadeInUp">
                          <h2 class="mb-4">Quienes somos?</h2>
                          <p class="mb-4">{about.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
