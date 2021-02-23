import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createProduct, updateProduct } from "../../../../actions/products";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });

  const product = useSelector((state) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) setPostData(product);
  }, [product]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateProduct(currentId, postData));
      clear();
    }
    dispatch(createProduct(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="card">
        <div className="card-header">
          {currentId ? "Editar" : "Crear"} Producto
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              name="name"
              value={postData.name}
              placeholder="Nombre producto"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              value={postData.description}
              placeholder="Descripción"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              name="price"
              type="number"
              value={postData.price}
              placeholder="Precio"
              className="form-control"
              min="0"
              onChange={(e) =>
                setPostData({ ...postData, price: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={postData.category}
              onChange={(e) => {
                setPostData({ ...postData, category: e.target.value });
              }}
            >
              <option value="0">- Seleccione -</option>
              <option value="1">Camisetas</option>
              <option value="2">Cuadros</option>
            </select>
          </div>
          <div className="form-group">
            <input
              name="quantity"
              type="number"
              value={postData.quantity}
              placeholder="Precio"
              className="form-control"
              min="0"
              onChange={(e) =>
                setPostData({ ...postData, quantity: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, image: base64 })
              }
            />
          </div>
        </div>
        <div className="card-footer">
          <div className="btn-group">
            <button
              className={currentId ? "btn btn-secondary" : "btn btn-primary"}
              type="submit"
            >
              {currentId ? "Editar" : "Agregar"}
            </button>
            <button className="btn btn-danger col" type="submit">
              limpiar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
