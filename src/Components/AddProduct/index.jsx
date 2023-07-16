import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const formSubmit = (e) => {
    console.log("form has already submitted");
    e.preventDefault();
    const titlePattern = /^[A-Z][a-zA-Z0-9\s_-]{2,49}$/;
    const pricePattern = /^\d+(\.\d{1,2})?$/;

    if (titlePattern.test(title)) {
      errors.title = "Name is required";
      console.log(titlePattern.test(title));
    } else {
      errors.title = true;
      
    }
    if (titlePattern.test(title)) {
      errors.price = "Price is required";
      console.log(pricePattern.test(title));
    } else {
      errors.price = true;
      
    }

    axios
      .post("http://localhost:10000/products", {
        title,
        price,
      })
      .then((data) => {
        // navigate("/products");
      });
  };

  return (
    <>
      <h1>HTML form</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            aria-describedby="Product Title"
            placeholder="Product Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {errors.title && (
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
          )} 
        </div>
        <div className="mb-3">
          <label
            htmlFor="productPrice"
            className="form-label"
            placeholder="Product Price"
          >
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            aria-describedby="Product Price"
            placeholder="Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
