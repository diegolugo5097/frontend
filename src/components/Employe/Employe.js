import React from "react";
import { Link } from "react-router-dom";
import "./Employe.css";

const Card = ({ employe }) => {

  /**
   * Function is responsible for cutting text of the description of the service
   * @param {str} str employee description text
   */
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };
 
  return (
    <>

   <section id="team" class="team">
      <div class="container">
      <div class="row">
      <div class="member">
             
             <h4>{employe.name}</h4>
             <span>Chief Executive Officer</span>
             <p>
             {truncate(employe.description)}
             </p>
             <div class="social">
               <a href=""><i class="bi bi-twitter"></i></a>
               <a href=""><i class="bi bi-facebook"></i></a>
               <a href=""><i class="bi bi-instagram"></i></a>
               <a href=""><i class="bi bi-linkedin"></i></a>
             </div>
           </div>
</div>
        </div>
        </section>
   


    </>
  );
};

export default Card;
