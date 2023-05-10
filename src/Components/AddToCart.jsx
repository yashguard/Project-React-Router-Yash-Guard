import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import CartPage from './CartPage'

const AddToCart = () => {
  let [price,setPrice] = useState()
  let [totalprice,setTotalprice] = useState()
  let data = JSON.parse(localStorage.getItem("cartData")) || []
  const getData = () => {
    let total = 0
    data.map((v) => {
      let totalPrice = total += v.price
      setPrice(totalPrice)
      setTotalprice(totalPrice - 35)
      return true
    })
  }
  useEffect(() => {
    getData()
  })

  return (
    <>
      <Nav />
      <div className='cart-page'>
        <div className="container">
          <div className="row justify-content-between heading">
            <h4>Products</h4>
            <h4>quantity</h4>
            <h4>price</h4>
          </div>
          {data.map((v, i) => {
            return <CartPage key={i} {...v} />
          })}
          <div className="row">
            <div className="blank"></div>
            <div className="total-part">
              <hr />
              <div className="total row justify-content-between">
                <h4>subtotal</h4>
                <span>${price}</span>
              </div>
              <div className="total row justify-content-between">
                <h4>tax</h4>
                <span>-$35</span>
              </div>
              <div className="total row justify-content-between" style={{ borderTop: "2px solid black", paddingTop: "15px" }}>
                <h4>total</h4>
                <span>${totalprice}</span>
              </div>
              <button>proceed to payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart
