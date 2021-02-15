import React from "react";
import Navigate from "../layout/Navbar";
import "./css/Signin.css";

const Signin = () => {
  const signinForm = () => (
    <div class="container py-5 mt-5">
      <div class="d-flex justify-content-center">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img
                src="https://i.postimg.cc/Z5FcDz3K/148814016-432064708114153-1855242371703276520-n.png"
                class="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name=""
                  class="form-control input_user"
                  value=""
                  placeholder="Nombre usuario"
                />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name=""
                  class="form-control input_pass"
                  value=""
                  placeholder="Contraseña"
                />
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlInline"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-center bg-primary mt-3 login_container">
                <button type="button" name="button" class="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navigate />
      {signinForm()}
    </>
  );
};

export default Signin;
