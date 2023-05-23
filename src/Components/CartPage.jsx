import React, { useContext, useState } from "react";
import { Auth } from "../ContextApi";

const CartPage = ({ brand, price, thumbnail, qty, id }) => {
  let {product} = useContext(Auth)
  console.log(product)
  let [value, setValue] = useState(qty);
  let [bhav, setBhav] = useState(price);
  let blankObj = [];
  let abcd = JSON.parse(localStorage.getItem("cartData"));
  let fixPrice = localStorage.getItem("price")
  const priceValue = (e) => {
    setValue(e.target.value);
    setBhav(e.target.value * fixPrice);
    let dataObj = {
      id: id,
      quantity: e.target.value,
      price: e.target.value * fixPrice,
    };
    blankObj.push(dataObj);
    abcd.map((v) => {
      if (v.id === dataObj.id) {
        v.price = dataObj.price;
        v.qty = dataObj.quantity;
      }
    });
    localStorage.setItem("cartData", JSON.stringify(abcd));
  };
  return (
    <div className="box">
      <hr />
      <div className="label">
        <div className="cart-items row justify-content-between">
          <div className="product-details">
            <div className="row align-items-center">
              <div className="image">
                <img src={thumbnail} alt="" />
              </div>
              <div className="details">
                <h2>{brand}</h2>
                <span>
                  Price : <span>${fixPrice}</span>
                </span>
                <button>Remove</button>
              </div>
            </div>
          </div>
          <div className="quantity">
            <label>Enter the quantity :</label>
            <input
              value={value}
              onChange={(e) => priceValue(e)}
              type="number"
            />
          </div>
          <div className="price">
            <h3>${bhav}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
