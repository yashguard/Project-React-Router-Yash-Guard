import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import SingleProducts from './SingleProducts'

const Products = () => {
  let [state, setState] = useState([])
  useEffect(() => {
    arrayApi();
  }, [])

  const arrayApi = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=51`);
    let res = await req.json();
    setState(res.products)
  }
  return (
    <section className='product-section'>
      <Nav />
      <div className="container row justify-content-between">
        <div className="abcd"></div>
        <div className=" product">
          {state.map((v, i) => <Link to={`/ProductDetails/${v.id}`} key={i}><SingleProducts {...v} /></Link>)}
        </div>
      </div>
    </section>
  )
}

export default Products
