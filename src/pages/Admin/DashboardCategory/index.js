import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../../../actions/categories";
import Navbar from "../../../components/Navigation/Navbar";
import Form from "./Form/Form";
import Categories from "./Categories/Categories";

const FormCategory = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
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
            <Categories setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCategory;
