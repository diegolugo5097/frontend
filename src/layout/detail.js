import React, { useState, useEffect } from "react";
import { read } from "../api/products/product";
import Navbar from "../components/Navigation/Navbar";
import { API } from "../config";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const loadProduct = (id) => {
    read(id).then((data) => {
      if (data.error) {
        setError(error.data);
      } else {
        setProduct(data.data);
      }
    });
  };

  useEffect(() => {
    const id = props.match.params.id;
    loadProduct(id);
  }, [props]);

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <p className="title-products text-white">{product.name}</p>
            <img className="img-top" src={product.image} width="364px" />
            <p className="title-products">{product.description}</p>
          </div>
          <div className="col-md-6">
            <form
              action={`${API}/send-email`}
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="card">
                <div className="card-header title-products text-dark">
                  Envianos un correo con el diseño que deseas
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Tu Nombre"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="lastname"
                      placeholder="Tu Apellido"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="typedocument"
                      aria-label="Default select example"
                    >
                      <option selected>- tipo documento -</option>
                      <option value="Documento de identidad">
                        Documento de identidad
                      </option>
                      <option value="Documento de identidad">Cedula</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="document"
                      placeholder="Numero documento"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="phone"
                      placeholder="Número de telefono"
                    />
                  </div>
                  <label className="text-secondary">
                    Ejemplo: " Color (camiseta): Rojo, Negro, Azul, Blanco...
                    etc. tipo de cuadro: "
                  </label>
                  <div className="form-group">
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="Descripción del producto"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="address"
                      placeholder="Dirección"
                    />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="image" type="file" />
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-info col">
                    <i class="fas fa-paper-plane mx-3"></i>Enviar correo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
