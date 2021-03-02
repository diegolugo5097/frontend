import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const Card = ({ user }) => {

  /**
   * Function is responsible for cutting text of the description of the user
   * @param {str} str user description text
   */ 
  
 
  return (
    <>
        <div className="card border-dark" style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h5 className="card-title">{user.username}</h5>
          <h5 className="card-title">{user.email}</h5>
          <Link to={`/product/read/${user._id}`}>
            <button className="btn btn-primary col">ver mas</button>
          </Link>
        </div>
      </div>
 
    </>
  );
};

export default Card;
