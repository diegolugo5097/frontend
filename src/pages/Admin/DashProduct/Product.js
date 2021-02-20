import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navigation/Navbar";
import { getProducts, addProduct } from "../../../core/products/product";
import { getCategories } from "../../../core/categories/category";
import MaterialTable from "material-table";

import { Button, Modal, ModalHeader, ModalBody, Form } from "reactstrap";

import "./Product.css";

const columns = [
  {
    title: "Nombre",
    field: "name",
  },
  {
    title: "Descripción",
    field: "description",
  },
  {
    title: "Precio",
    field: "price",
    type: "numeric",
  },
  {
    title: "Cantidad",
    field: "quantity",
    type: "numeric",
  },
];

const DashProduct = () => {
  const [product, setProducts] = useState([]);
  const [cate, setCategories] = useState([]);
  const [err, setError] = useState([]);

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

  const {
    name,
    description,
    price,
    category,
    photo,
    quantity,
    addProducts,
    formData,
  } = values;

  // Hook modal open
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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

  useEffect(() => {
    loadProducts();
    loadCategories();
    setValues({ ...values, formData: new FormData() });
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    addProduct(formData).then((data) => {
      console.log(formData);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: 0,
          category: 0,
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

      <div className="container mt-4 py-4">
        <div className="row justify-content-end p-2">
          <Button color="primary" onClick={toggle}>
            <i className="fas fa-plus"></i>
          </Button>
        </div>
        <MaterialTable
          columns={columns}
          data={product}
          title="Gestión Productos"
          actions={[
            {
              icon: "edit",
              tooltip: "Editar producto",
              onClick: (event, rowData) => {},
            },
            {
              icon: "delete",
              tooltip: "Eliminar producto",
              onClick: (event, rowData) => {},
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            actions: "Acciones",
          }}
        />
      </div>
      <div>
        <Form inline>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Agregar Nuevo Producto</ModalHeader>
            <ModalBody>
              <form className="mb-4" onSubmit={clickSubmit}>
                <div className="form-group">
                  <label className="btn btn-light">
                    <input
                      onChange={handleChange("photo")}
                      type="file"
                      name="photo"
                      accept="image/*"
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
                  <label className="text-muted">description</label>
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
                <button className="btn btn-outline-success">Agregar</button>
              </form>
            </ModalBody>
          </Modal>
        </Form>
      </div>
    </>
  );
};

export default DashProduct;
