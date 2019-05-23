import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav  navbar-right">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-home" />
              &nbsp; Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact/add">
              <i className="fas fa-plus" />
              &nbsp; Add
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              <i className="fas fa-question" />
              &nbsp; About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
