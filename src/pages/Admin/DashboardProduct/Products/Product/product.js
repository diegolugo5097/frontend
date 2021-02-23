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
                Eliminar
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(product._id)}
              >
                Editar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Product;
