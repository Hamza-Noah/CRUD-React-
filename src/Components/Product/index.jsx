import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:10000/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  console.log(product);

  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">{product.title}</h1>
              <p className="card-text text-center">
                Product ID: <b>{product.id}</b>{" "}
              </p>
              <p className="card-text text-center">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
