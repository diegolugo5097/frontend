import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  /**
   * Function is responsible for cutting text of the description of the products
   * @param {str} str Product description text
   */
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <>
      <div className="card" style={{ maxWidth: "18rem" }}>
        <img className="img-top" src={product.image} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{truncate(product.description)}</p>
          <Link to={`/product/read/${product._id}`}>
            <button className="btn btn-outline-primary col">ver mas</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
