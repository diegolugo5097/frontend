import React, { useState } from "react";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
  const [count, setCount] = useState(product.count);

  /**
   * Function is responsible for cutting text of the description of the products
   * @param {str} str Product description text
   */
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <>
      <div className="card border-dark" style={{ maxWidth: "18rem" }}>
        <ShowImage className="img" item={product} url="product" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{truncate(product.description)}</p>
          <a href="#" className="btn btn-primary col">
            ver mas
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
