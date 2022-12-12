import React from 'react'
import Product from './Product'

const Products = ({ products }) => {
  return (
    
    <>
      <h2 className="sub-titles">Featured Product</h2>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </>
  )
}

export default Products