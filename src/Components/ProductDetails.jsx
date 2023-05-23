import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import { Auth } from "../ContextApi";

const ProductDetails = () => {
  let {abcd} = useContext(Auth)
  let nav = useNavigate();
  let { id } = useParams();
  let [data, setData] = useState({});
  const api = async () => {
    let req = await fetch(`https://dummyjson.com/products/${id}`);
    let res = await req.json();
    setData(res);
  };
  useEffect(() => {
    api();
  }, []);
  const addData = () => {
    let bol = true;
    let arrayData = JSON.parse(localStorage.getItem("cartData")) || [];
    arrayData.map((v, i) => {
      if (data.id === v.id) {
        return (bol = false);
      }
    });
    if (bol) {
      nav("/AddToCart");
      arrayData.push({ ...data, qty: "1" });
      abcd(arrayData)
      localStorage.setItem("cartData", JSON.stringify(arrayData));
      localStorage.setItem("price", data.price);
      alert("Your product has successfully added to cart");
    } else if (!bol) {
      nav("/AddToCart");
      alert("Product is already available in your cart");
    }
  };

  return (
    <>
      <Nav />
      <section className="productDetails-section">
        <div className="container">
          <div className="row">
            <div className="productImage">
              <img src={data.thumbnail} alt="" />
              <button>Proceed to buy</button>
              <button onClick={addData}>Add to cart</button>
            </div>
            <div className="productDetails">
              <h1 className="title">{data.title}</h1>
              <p className="description">{data.description}</p>
              <span className="price">{data.price}$</span>
              <span className="disc">
                {data.discount} {data.discountPercentage}%off
              </span>
              <div className="rating">
                {data.rating}
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="brand">{data.brand}</div>
              <div className="category">{data.category}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
