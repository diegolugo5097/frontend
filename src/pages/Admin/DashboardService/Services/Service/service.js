import React from "react";
import { useDispatch } from "react-redux";
import { deleteService } from "../../../../../actions/services";

const Service = ({ service, setCurrentId }) => {
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
          <td>{service.name}</td>
          <td>{service.description}</td>
          <td>{service.price}</td>
          <td>
            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteService(service._id))}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(service._id)}
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

export default Service;
