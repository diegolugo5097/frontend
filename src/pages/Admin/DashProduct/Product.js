import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navigation/Navbar";
import {
  getProducts,
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../../core/products/product";
import { getCategories } from "../../../core/categories/category";

import "./Product.css";

const DashProduct = ({ match }) => {
  const [product, setProducts] = useState([]);
  const [cate, setCategories] = useState([]);
  const [err, setError] = useState([]);
  const [clicked, setClicked] = useState(false);

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: 0,
    category: 0,
    photo: "",
    quantity: 0,
    addProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const { name, description, price, photo, quantity, formData } = values;

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  const editProduct = (id) => {
    getProduct(id).then((data) => {
      setValues({
        ...values,
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        quantity: data.quantity,
        formData: new FormData(),
      });
    });
    loadCategories();
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
    setValues({ ...values, formData: new FormData() });
    editProduct(match.params.id);
    init();
  }, []);

  const deleteProducts = (id) => {
    deleteProduct(id);
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  /**
   * Function is responsible for cutting text of the description of the products
   * @param {str} str Product description text
   */
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };

  const clickEdit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateProduct(match.params.id, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: 0,
          category: "",
          photo: "",
          quantity: 0,
          redirectToProfile: false,
          addProducts: data.name,
        });
      }
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    addProduct(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: 0,
          category: "",
          photo: "",
          quantity: 0,
          redirectToProfile: false,
          addProducts: data.name,
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-12 mt-5 py-5">
          <div className="row justify-content-between">
            <div className="card mt-0 text-left">
              <div className="card-body">
                <form
                  className="mb-4 col"
                  onSubmit={clicked ? { clickEdit } : { clickSubmit }}
                >
                  <div className="form-group">
                    <label className="btn btn-light">
                      <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept=""
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Nombre</label>
                    <input
                      onChange={handleChange("name")}
                      type="text"
                      className="form-control"
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Descripción</label>
                    <textarea
                      onChange={handleChange("description")}
                      type="text"
                      rows={5}
                      className="form-control"
                      value={description}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Precio</label>
                    <input
                      onChange={handleChange("price")}
                      type="numeric"
                      className="form-control"
                      value={price}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Categoria</label>
                    <select
                      onChange={handleChange("category")}
                      type="text"
                      className="form-control"
                    >
                      <option>- Seleccione -</option>
                      {cate.map((category, i) => (
                        <option value={category._id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Cantidad</label>
                    <input
                      onChange={handleChange("quantity")}
                      type="numeric"
                      className="form-control"
                      value={quantity}
                    />
                  </div>
                  {clicked ? (
                    <button className="btn btn-warning">Editar</button>
                  ) : (
                    <button className="btn btn-success">Agregar</button>
                  )}
                </form>
              </div>
            </div>

            <table className="col-5 table text-white">
              <tr className="text-center">
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
              {product.map((product) => {
                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{truncate(product.description)}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td className="btn-group">
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          editProduct(product._id);
                          setClicked(true);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProducts(product._id)}
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashProduct;
