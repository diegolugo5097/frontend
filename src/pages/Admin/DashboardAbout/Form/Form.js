import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createAbout, updateAbout } from "../../../../actions/AboutUs";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    description: "",
  });

  const about = useSelector((state) =>
    currentId ? state.abouts.find((a) => a._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (about) setPostData(about);
  }, [about]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateAbout(currentId, postData));
      clear();
    }
    dispatch(createAbout(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      description: "",
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
              name="description"
              value={postData.description}
              placeholder="Nosotros somos"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
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
