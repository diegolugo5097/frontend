import React from "react";

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
      <div className="card border-dark" style={{ maxWidth: "18rem" }}>
        <img className="img-top" src={product.image} />
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
