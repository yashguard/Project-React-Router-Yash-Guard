import React, { useState } from 'react'

const CartPage = ({ brand, price, thumbnail, qty, index }) => {
  let blankObj = []
  let [value, setValue] = useState(qty)
  let [bhav, setBhav] = useState(price)
  const priceValue = (e) => {
    setValue(e.target.value)
    setBhav(e.target.value * price)
    let dataObj = {
      index: index,
      quantity: e.target.value,
      price: e.target.value * price
    }
    if (index == dataObj.index) {
      blankObj.push(dataObj)
      console.log(blankObj)
    }
    // localStorage.setItem("quantityPriceNew",JSON.stringify(blankObj))
  }
  return (
    <div className="box" id={`${index}`}>
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
                <span>Price : <span>${price}</span></span>
                <button>Remove</button>
              </div>
            </div>
          </div>
          <div className="quantity">
            <label>Enter the quantity :</label><input value={value} onChange={(e) => priceValue(e)} type="number" />
          </div>
          <div className="price">
            <h3>${bhav}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
