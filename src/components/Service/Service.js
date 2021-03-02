import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Card = ({ service }) => {

  /**
   * Function is responsible for cutting text of the description of the service
   * @param {str} str service description text
   */

  return ( 
    <>
    <section id="pricing" class="pricing">
      <div class="container">
    <div >
            <div class="box">
              <h3>{service.name}</h3>
              <h4><sup>$</sup>{service.price}<span> / month</span></h4>
              <h3>{service.description}</h3>            

              <div class="btn-wrap">
              <Link to={`/service/read/${service._id}`}>
            <button className="btn btn-primary col">ver mas</button>
          </Link>
              </div>
            </div>
          </div>
      </div>
   </section>
 
    </>
  );
};

export default Card;
