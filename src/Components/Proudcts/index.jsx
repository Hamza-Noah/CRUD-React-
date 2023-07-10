import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:10000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  const getAllProducts = ()=>{
    
  }

  const deleteProduct = (id) => {
    fetch(`http://localhost:10000/products/${id}`,{
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
  };

  return (
    <>
      <h1>Products</h1>
      <Link to="product/add" className="btn btn-success mt-3">
        Add Produts
      </Link>
      <table className="products-table table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 20)}...</td>
                <td>{product.price}</td>
                <td>
                  <div className="d-flex">
                    <button
                      onClick={(_) => {
                        deleteProduct(product.id);
                      }}
                      className="btn btn-danger btn-sm me-2"
                    >
                      Delete
                    </button>
                    <Link
                      className="btn btn-info btn-sm me-2"
                      to={`/products/${product.id}`}
                    >
                      View
                    </Link>
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
