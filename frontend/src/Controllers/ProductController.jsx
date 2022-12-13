import React from 'react'
import ProductView from '../Views/ProductView'
import { Route } from 'react-router-dom'

const ProductController = () => {
  return (
    <>
    <Route path="/products" element={ <ProductView />} />
    </>
  )
}

export default ProductController