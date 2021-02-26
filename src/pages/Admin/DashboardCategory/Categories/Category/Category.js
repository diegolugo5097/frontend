import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../../../actions/categories";

const Category = ({ category, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{category.name}</td>
          <td>
            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteCategory(category._id))}
              >
                <i class="far fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(category._id)}
              >
                <i class="fas fa-edit"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Category;
