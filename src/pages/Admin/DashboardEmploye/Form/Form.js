import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createEmploye, updateEmploye } from "../../../../actions/employes";


const Form = ({ currentId, setCurrentId }) => {
  const [error, setError] = useState([]);

  const [postData, setPostData] = useState({ 
    name: "",
    description: "",
    price: "",
  });

  const employe = useSelector((state) =>
    currentId ? state.employes.find((p) => p._id === currentId) : null
  );

 

  const dispatch = useDispatch();

  useEffect(() => {
    if (employe) setPostData(employe);
  }, [employe]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateEmploye(currentId, postData));
      clear();
    }
    dispatch(createEmploye(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      description: "",
      price: "",
 
    });
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="card">
        <div className="card-header">
          {currentId ? "Editar" : "Crear"} Empleado
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              name="name"
              value={postData.name}
              placeholder="Nombre empleado"
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
    </form>
  );
};

export default Form;
