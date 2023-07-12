import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:10000/products", {
        title,
        price,
      })
      .then((data) => {
        navigate("/products");
      });
  };

  return (
    <>
      <h1>HTML for</h1>
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
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
