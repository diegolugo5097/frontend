import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Navbar from "../../../components/Navigation/Navbar";
import { getCategories } from "../../../core/categories/category";

const DashCategory = () => {
  const [category, setCategories] = useState([]);
  const [error, setError] = useState([]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center mt-5 py-5">
          <Table className="table">
            <thead>
              <tr className="text-center">
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {category.map((category) => {
                return (
                  <tr>
                    <td>{category.name}</td>
                    <td>
                      <div className="btn btn-primary">Gestión</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default DashCategory;
