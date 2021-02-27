import React from "react";
import { Link, withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";
import { isAuthenticated, signout } from "../../api/auth/auth";
import "./Navbar.css";
import "../../layout/Home/assets/css/bootstrap.css";
import "../../layout/Home/assets/css/maicons.css";
import "../../layout/Home/assets/css/mobster.css";

const Navigate = ({ history }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="../../layout/Home/assets/favicon-light.png"
              alt=""
              width="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <div className="ml-auto mx-4 my-2 my-lg-0">
              <Link className="text-white">
                <i className="fab fa-facebook-square mx-4"></i>
              </Link>
              <Link className="text-white">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="banner page-hero-section bg-image hero-home-2">
        <div className="hero-caption">
          <div className="container fg-white h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                <div className="badge badge-soft mb-2">#1 Sublimedia</div>
                <h1 className="mb-4 fw-normal">
                  La mejor forma de personalizar tu vida
                </h1>
                <a href="#" className="btn btn-dark">
                  Empezar Diseño
                </a>
                <div
                  className="col-lg-6 d-none d-lg-block wow zoomIn"
                  style={{
                    position: "relative",
                    marginLeft: "117%",
                    marginTop: "0%",
                  }}
                >
                  <div
                    className="mobile-preview shadow floating-animate"
                    style={{ marginTop: "-93%" }}
                  >
                    <img src="https://www.pikpng.com/pngl/b/535-5352677_camiseta-tu-diseo-aqui-clipart.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Navigate);
