import React, { useState } from "react";
import { signup } from "../../core/auth/auth";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, username, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, username, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          username: "",
          email: "",
          password: "",
          success: true,
          error: "",
        });
      }
    });
  };

  const signUpFrom = () => (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5 p-3">
          <div className="shadow p-1 mb-3 bg-dark rounded">
            <div className="card card-outline-secondary">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img
                    src="https://i.postimg.cc/Z5FcDz3K/148814016-432064708114153-1855242371703276520-n.png"
                    className="brand_logo"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="card-body mt-5 py-5">
                <form className="form" role="form" autocomplete="off">
                  <div className="form-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <li className="fas fa-address-card"></li>
                      </div>
                      <input
                        onChange={handleChange("name")}
                        value={name}
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Nombre completo"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <li className="fas fa-user"></li>
                      </div>
                      <input
                        onChange={handleChange("username")}
                        value={username}
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Nombre de usuario"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <li className="fas fa-at"></li>
                      </div>
                      <input
                        onChange={handleChange("email")}
                        value={email}
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Correo electronico"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <li className="fas fa-key"></li>
                      </div>
                      <input
                        onChange={handleChange("password")}
                        value={password}
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="Contraseña"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      onClick={clickSubmit}
                      className="btn btn-warning text-white btn-lg col mt-3"
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <>{signUpFrom()}</>;
};

export default Signup;
