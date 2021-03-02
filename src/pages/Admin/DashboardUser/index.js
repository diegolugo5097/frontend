import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../actions/users";
import Navbar from "../../../components/Navigation/Navbar";
import Form from "./Form/Form.js";
import Users from "./Users/users.js";

const FormUser = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
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
            <Users setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormUser; 
