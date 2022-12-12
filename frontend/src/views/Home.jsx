import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../components/Products'
import Product from '../components/Product'
import Sale from '../components/Sale'

const Home = () => {

const [products, setProducts] = useState([])

useEffect(() => {

  const getPosts = async () => {
    try {
      
      const res = await fetch('https://localhost:7025/api/Posts')
      if(!res.ok) {
        throw new Error(res.status, res.statusText)
      }
      const data = await res.json()
      setProducts(data)


    } catch (err) {
      console.log(err.message)
    }

  }

  getPosts()

}, [])

  return (
    <>
    <Sale />
    <Products />
    {
      products.length > 0 ? products.map(product => (
        <Product key={products.id} product={product} />
      ))
      : <div>There are currently no featured products!</div>
    }
    </>
  )
}

export default Home