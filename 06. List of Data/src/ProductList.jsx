import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <div>
        {products.map(({id, name, price}) => {
            return (
                <ul key={id}>
                    <li>Product name : {name}</li>
                    <li>Product price : {price}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default ProductList