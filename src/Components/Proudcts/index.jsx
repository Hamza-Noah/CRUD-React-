import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";

export default function Products() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:10000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      showCancelButton: true,
      title: `Are You Sure You Want To Delete ${product.title}`,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:10000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1>Products</h1>
      <Link to="/products/add" className="btn btn-success mt-3">
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
                <td>{typeof product.description === "string" ? product.description.slice(0, 20) : ""}...</td>
                <td>{product.price}</td>
                <td>
                  <div className="d-flex">
                    <button
                      onClick={(_) => {
                        deleteProduct(product);
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
