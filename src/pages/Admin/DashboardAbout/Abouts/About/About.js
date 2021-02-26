import React from "react";
import { useDispatch } from "react-redux";
import { deleteAbout } from "../../../../../actions/AboutUs";

const About = ({ about, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{about.description}</td>
          <td>
            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteAbout(about._id))}
              >
                <i class="far fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setCurrentId(about._id)}
              >
                <i class="fas fa-edit"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default About;
