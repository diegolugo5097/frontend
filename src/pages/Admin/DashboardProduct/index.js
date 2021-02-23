import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Navbar from "../../../components/Navigation/Navbar";
import Form from "./Form/Form.js";
import Products from "./Products/products.js";

const FormProduct = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
            <Products setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormProduct;
