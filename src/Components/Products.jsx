import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom'

const Products = () => {
  let [state, setState] = useState([])
  useEffect(() => {
    arrayApi();
  }, [])

  const arrayApi = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=12`);
    let res = await req.json();
    setState(res.products)
  }
  console.log(state)
  return (
    <div>
      <Nav />
      {state.map((v, i) => <Link to={`/ProductDetails/${v.id}`}><ProductDetails key={i} {...v} /></Link> )}
    </div>
  )
}

export default Products
