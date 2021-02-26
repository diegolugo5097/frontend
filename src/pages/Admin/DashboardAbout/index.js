import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAbouts } from "../../../actions/AboutUs";
import Navbar from "../../../components/Navigation/Navbar";
import Form from "./Form/Form";
import Abouts from "./Abouts/Abouts";

const FormAbout = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbouts());
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
            <Abouts setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAbout;
