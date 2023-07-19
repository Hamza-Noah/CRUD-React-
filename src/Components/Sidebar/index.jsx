import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <ul className="list-unstyled">
      <li>
        <Link className="active d-block text-decoration-none" to="products">
          Get All Products
        </Link>
      </li>
      <li>{/* <Link to="">Get All Categories</Link> */}</li>
    </ul>
  );
}
