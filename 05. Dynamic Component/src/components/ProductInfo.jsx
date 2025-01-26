import React from 'react'

const ProductInfo = () => {
    const product = {
        "name" : "Laptop",
        "price" : "$1200",
        "availibility" : "In Stock"
    }
  return (
    <div>
        <p>Product name : {product.name}</p>
        <p>Product Price : {product.price}</p>
        <p>Product availibility : {product.availibility}</p>
    </div>
  )
}

export default ProductInfo