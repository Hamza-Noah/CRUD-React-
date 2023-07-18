import React from "react";
import { useFormik } from "formik";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function AddProduct() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      category: "",
    },
    validationSchema: yup.object({
      productName: yup
        .string()
        .max(25, "Must Be 25 characters or less")
        .required("Product Name is required"),
      productPrice: yup
        .number()
        .max(1000, "Product price cannot not be Pricier than 1000")
        .required("Product Price is required"),
      category: yup
        .string()
        .max(100, "Prodcut description cannot exceed 100 characters"),
    }),

    onSubmit: (values) => {

console.log(formik);
      navigate("/products");
    },
  });
  console.log(formik.errors);

  return (
    <>
      <div className="pt-5">
        <h1 className="text-center mb-5">Adding Product Form</h1>
        <form onSubmit={formik.handleSubmit}>
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched.productName && formik.errors.productName && (
              <div className="alert alert-danger mt-3" role="alert">
                {formik.errors.productName}
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
              id="productPrice"
              className="form-control"
              aria-describedby="Product Price"
              placeholder="Product Price"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.productPrice}
            />
            {formik.touched.productPrice && formik.errors.productPrice && (
              <div className="alert alert-danger mt-3" role="alert">
                {formik.errors.productPrice}
              </div>
            )}
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
              placeholder="Category"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            {formik.touched.category && formik.errors.category && (
              <div className="alert alert-danger mt-3" role="alert">
                {formik.errors.productPrice}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
