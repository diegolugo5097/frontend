import React from "react";
import Navigate from "../layout/Navbar";

const Signup = () => {
  const signUpFrom = () => (
    <div className="container py-4">
      <div className="row justify-content-center col">
        <div className="col-md-6">
          <div className="shadow p-1 mb-3 bg-dark rounded">
            <div className="card card-outline-secondary">
              <div className="card-header bg-warning text-white text-center">
                <h3 className="mb-0">Registrate</h3>
              </div>
              <div className="card-body">
                <form className="form" role="form" autocomplete="off">
                  <div className="form-group">
                    <label for="inputName">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Nombre completo"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputName">Nombre de usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Nombre de usuario"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail3">Correo electronico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Correo electronico"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword3">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Contraseña"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="validatedCustomFile"
                      />
                      <label
                        class="custom-file-label"
                        for="validatedCustomFile"
                      >
                        Agrega un archivo
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg col"
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
  return (
    <>
      <Navigate />
      {signUpFrom()}
    </>
  );
};

export default Signup;
