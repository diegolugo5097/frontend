import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../../actions/products";

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>
            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteProduct(product._id))}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(product._id)}
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

export default Product;
