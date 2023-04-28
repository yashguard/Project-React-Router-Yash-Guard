import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import SingleProducts from './SingleProducts'

const Products = () => {
  let data = JSON.parse(localStorage.getItem("signupData")) || [];
  console.log(data.length)
  let [state, setState] = useState([])
  useEffect(() => {
    arrayApi();
  }, [])

  const arrayApi = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=12`);
    let res = await req.json();
    setState(res.products)
  }
  return (
    <section className='product-section'>
      <Nav />
      <div className="container product">
        {state.map((v, i) => <Link to={`${data.length > 0 ? `/ProductDetails/${v.id}` : `/Signup`}`} key={i}><SingleProducts {...v} /></Link>)}
      </div>
    </section>
  )
}

export default Products
