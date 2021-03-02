import React from "react";
import { useSelector } from "react-redux";
import Employe from "./Employe/employe.js";

const Employes = ({ setCurrentId }) => {
  const employes = useSelector((state) => state.employes);
  return !employes.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div> 
      {employes.map((employe) => {
        return <Employe employe={employe} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

export default Employe;
  