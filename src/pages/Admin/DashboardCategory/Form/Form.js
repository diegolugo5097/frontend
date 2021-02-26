import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCategory, updateCategory } from "../../../../actions/categories";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: "",
  });

  const category = useSelector((state) =>
    currentId ? state.categories.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (category) setPostData(category);
  }, [category]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateCategory(currentId, postData));
      clear();
    }
    dispatch(createCategory(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
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
              placeholder="Nombre"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="card-footer">
            <div className="btn-group">
              <button
                className={currentId ? "btn btn-warning" : "btn btn-primary"}
                type="submit"
              >
                {currentId ? "Editar" : "Agregar"}
              </button>
              <button className="btn btn-danger col" type="submit">
                <i class="fas fa-broom"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
