import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddProduct from "../AddProduct";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:10000/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  return <><AddProduct editState={true} id={id}/></>;
}
