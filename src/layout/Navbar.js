import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";

const Navigate = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div></div>
          <a className="navbar-brand" href="#">
            Sublimedia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem className="nav-link">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </NavItem>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <NavItem className="nav-link">
              <Link className="nav-link" to="/signup">
                Registro
              </Link>
            </NavItem>
            <NavItem className="nav-link">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </NavItem>
            <li className="nav-item">
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigate;
