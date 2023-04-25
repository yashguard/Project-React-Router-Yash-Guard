import React from 'react'
import Nav from './Nav'

const ProductDetails = ({title, brand, thumbnail, rating, stock, price, id, category, description}) => {
  return (
    <div>
       <div className="productBox">
        <img src={thumbnail} alt="" />
       </div> 
    </div>
  )
}

export default ProductDetails
