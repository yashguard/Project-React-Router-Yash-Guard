import React from 'react'

const SingleProducts = ({ thumbnail, title, price, description }) => {
   return (
      <div>
         <div className="productBox">
            <img src={thumbnail} alt="" />
            <div className="content">
               <h1>{title}</h1>
               <span>${price}</span>
               <p>{description}</p>
            </div>
         </div>
      </div>
   )
}

export default SingleProducts
