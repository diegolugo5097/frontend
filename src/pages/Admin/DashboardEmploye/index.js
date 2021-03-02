import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployes } from "../../../actions/employes";
import Navbar from "../../../components/Navigation/Navbar";
import Form from "./Form/Form.js";
import Employes from "./Employe/employe.js";

const FormEmploye = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployes());
  }, [currentId, dispatch]);

  return (
    <> 
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-ms-4 ,t-5 py-5">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
          <div className="col-xl-12 col-sm-7 text-white mt-5">
            <Employes setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormEmploye;
