import React from 'react'

const SingleProducts = ({thumbnail}) => {
   return (
      <div>
         <div className="productBox">
            <img src={thumbnail} alt="" />
         </div>
      </div>
   )
}

export default SingleProducts
