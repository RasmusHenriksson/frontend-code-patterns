import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../components/Products'

const Home = () => {

const [products, setProducts] = useState([])

useEffect(() => {

  const getPosts = async () => {
    try {
      
      const res = await fetch('https://localhost:7272/api/Posts')
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
    <Products />
    </>
  )
}

export default Home