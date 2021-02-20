import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Navbar from "../../../components/Navigation/Navbar";
import { getAbout } from "../../../core/aboutUs/about";

const DashAbout = () => {
  const [about, setAbout] = useState([]);
  const [error, setError] = useState([]);

  const loadAbout = () => {
    getAbout().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAbout(data);
      }
    });
  };

  useEffect(() => {
    loadAbout();
  }, []);

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center mt-5 py-5">
          <Table className="table">
            <thead>
              <tr className="text-center">
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {about.map((about) => {
                return (
                  <tr>
                    <td>{truncate(about.description)}</td>
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

export default DashAbout;
