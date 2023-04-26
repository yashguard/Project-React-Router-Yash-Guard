import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Products from './Products'
import AddToCart from '../AddToCart'
import ContactUs from './ContactUs'
import ProductDetails from './ProductDetails'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/About' element={<About />} />
         <Route path='/AddToCart' element={<AddToCart />} />
         <Route path='/ContactUs' element={<ContactUs />} />
         <Route path='/Service' element={<Service />} />
         <Route path='/Products' element={<Products />} />
         <Route path='/ProductDetails/:id' element={<ProductDetails />} />
         <Route path='*' element={<h1>404 Error Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
