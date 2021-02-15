import React, { useState } from "react";
import ShowImage from "../core/ShowImage";

const Card = ({ product }) => {
  const [count, setCount] = useState(product.count);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <ShowImage className="img" item={product} url="product" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <a href="#" className="btn btn-success">
            ver mas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
