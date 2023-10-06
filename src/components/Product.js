import React from "react";
import { useEffect, useState } from "react";
import { productList } from "../components/Data";
import "./Product.css";

const Products = () => {
const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/getAllProduct")
      .then((res) => res.json())

      .then((result) => setProducts(result))

      .catch((err) => console.log(err));
  }, []);

  return (

   
    
    <div className="conpro">
      {products.map((product) => (
        <div className="card product" key={product.id}>
          <div className="imgBox">
            <img src={product.image} alt={product.title} className="mouse" />
          </div>

          <div className="contentBox">
            <h3>{product.title}</h3>

            <p className="price">{product.rent}</p>

            <button className="moredetails">More Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
