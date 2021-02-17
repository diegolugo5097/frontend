import React, { useState, useEffect } from "react";
import "./Signin.css";
import { signin, authenticate, isAuthenticated } from "../../core/auth/auth";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: false, loading: true });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };
  /**
   * Function that builds the login / sign in form
   */
  const signinForm = () => (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-center">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img
                src="https://i.postimg.cc/Z5FcDz3K/148814016-432064708114153-1855242371703276520-n.png"
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="container mt-5">
            <form>
              <div className="mt-5 mb-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <li className="fas fa-at"></li>
                    </div>
                  </div>
                  <input
                    onChange={handleChange("email")}
                    type="email"
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Correo Electronico"
                    value={email}
                  />
                </div>
              </div>

              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <li className="fas fa-key"></li>
                  </div>
                </div>
                <input
                  onChange={handleChange("password")}
                  type="password"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Contraseña"
                  value={password}
                />
              </div>
              <div
                onClick={clickSubmit}
                className="btn btn-warning text-white mt-5 col"
              >
                INGRESAR
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.rol === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect top="/" />;
    }
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <>
      {showError()}
      {showLoading()}
      {signinForm()}
      {redirectUser()}
    </>
  );
};

export default Signin;
