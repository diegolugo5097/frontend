import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmploye } from "../../../../../actions/employes";

const Employes = ({ employe, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{employe.name}</td>
          <td>{employe.description}</td>
          <td>{employe.price}</td>
          <td>
            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteEmploye(employe._id))}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(employe._id)}
              >
                <i class="far fa-edit"></i>
              </button>
            </div>
          </td>   
        </tr>
      </tbody>
    </table>
  );
};

export default Employes;
