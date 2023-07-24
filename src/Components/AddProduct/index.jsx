import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function AddProduct(props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      category: "",
      prdouctDescription: "",
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
        .max(25, "Prodcut category cannot exceed 25 characters")
        .required("Product Description is required"),
      prdouctDescription: yup
        .string()
        .max(100, "Product Description Cannot exceed 100 characters")
        .required("Product Description is required"),
    }),

    onSubmit: (values) => {
      navigate("/products");
      axios.post("http://localhost:10000/products", {
        title: formik.values.productName,
        price: formik.values.productPrice,
        category: formik.values.category,
        description: formik.values.prdouctDescription
      });
    },
  });

  // Edit Case

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (props.editState) {
      fetch(`http://localhost:10000/products/${props.id}`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        })
        .then((_) => {
          formik.setFieldValue("productName", product.productName);
        });
    }
  }, []);

  return (
    <>
      <div className="pt-5">
        <h1 className="text-center mb-5">
          {props.edit ? "Editing" : "Adding"} Product Form
        </h1>
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
              value={formik.values.productName}
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
                {formik.errors.category}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="prdouctDescription" className="form-label">
              Prdouct Description
            </label>
            <textarea
              name=""
              rows="3"
              aria-describedby="productDescription"
              className="form-control"
              id="prdouctDescription"
              value={formik.values.prdouctDescription}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            ></textarea>
             {formik.touched.prdouctDescription &&
            formik.errors.prdouctDescription && (
              <div className="alert alert-danger my-3" role="alert">
                {formik.errors.prdouctDescription}
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
