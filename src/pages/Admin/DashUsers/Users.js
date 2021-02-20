import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Navbar from "../../../components/Navigation/Navbar";
import { getUsers } from "../../../core/auth/auth";

const DashUser = () => {
  const [user, setUsers] = useState([]);
  const [error, setError] = useState([]);

  const loadUsers = () => {
    getUsers().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setUsers(data);
      }
    });
  };

  useEffect(() => {
    loadUsers();
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
                <th>Nombre</th>
                <th>Nombre de usuario</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {user.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
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

export default DashUser;
