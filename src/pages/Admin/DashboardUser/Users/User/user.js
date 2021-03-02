import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../../actions/users";

const User = ({ user, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>APODO</th>
          <th>CORREO</th> 
        </tr> 
      </thead>
      <tbody>
  
        <tr>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
       
          <td>
          <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteUser(user._id))}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(user._id)}
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

export default User;
