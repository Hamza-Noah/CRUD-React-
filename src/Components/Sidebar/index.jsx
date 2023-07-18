import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="list-unstyled">
      <li>
        <Link to="products">Get All Products</Link>
      </li>
      <li>
        {/* <Link to="">Get All Categories</Link> */}
      </li>
    </ul>
  );
}
