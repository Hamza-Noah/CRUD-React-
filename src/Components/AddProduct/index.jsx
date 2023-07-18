import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      category: "",
    },
  });

  console.log(formik.initialValues);
  console.log(formik.values);

  return (
    <>
      <div className="pt-5">
        <h1 className="text-center mb-5">Adding Product Form</h1>
        <form>
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
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <div className="alert alert-danger mt-3" role="alert">
              A simple danger alert—check it out!
            </div>
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
              id="productPrice"
              className="form-control"
              aria-describedby="Product Price"
              placeholder="Product Price"
              onChange={formik.handleChange}
              value={formik.values.productPrice}
            />
            <div className="alert alert-danger mt-3" role="alert">
              A simple danger alert—check it out!
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label" placeholder="Category">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              aria-describedby="category"
              placeholder="Product Price"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
