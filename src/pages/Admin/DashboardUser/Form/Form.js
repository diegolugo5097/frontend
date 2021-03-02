import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUser, updateUser } from "../../../../actions/users";

import { fetchRoles } from "../../../../api/roles/role";

const Form = ({ currentId, setCurrentId }) => {
  const [error, setError] = useState([]);
  const [role, setRole] = useState([]);

  const [postData, setPostData] = useState({ 
    name: "",
    username: "",
    email: "",
    hashed_password: "",
    role: "", 
  });
 
  const user = useSelector((state) =>
    currentId ? state.users.find((p) => p._id === currentId) : null
  );

  const loadRoles = () => {
    fetchRoles().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setRole(data.data);
      }
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    loadRoles();
    if (user) setPostData(user);
  }, [user]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateUser(currentId, postData));
      clear();
    }
    dispatch(createUser(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
    username: "",
    email: "",
    hashed_password: "",
    role: "",
 
    });
  };

  return (
    <form onSubmit={handleSummit}>
      <div className="card">
        <div className="card-header">
          {currentId ? "Editar" : "Crear"} Usuario
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              name="name"
              value={postData.name}
              placeholder="Nombre usuario"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <textarea
              name="username"
              value={postData.username}
              placeholder="Apodo"
              className="form-control"
              onChange={(e) =>
                setPostData({ ...postData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="String"
              value={postData.email}
              placeholder="Correo"
              className="form-control"
              min="0"
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              name="hashed_password"
              type="String"
              value={postData.hashed_password}
              placeholder="contraseña"
              className="form-control"
              min="0"
              onChange={(e) =>
                setPostData({ ...postData, hashed_password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={postData.role}
              onChange={(e) => {
                setPostData({ ...postData, role: e.target.value });
              }}
            >
              <option value="0">- Seleccione -</option>
              {role.map((role) => {
                return <option value={role._id}>{role.name}</option>;
              })}
            </select>
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
