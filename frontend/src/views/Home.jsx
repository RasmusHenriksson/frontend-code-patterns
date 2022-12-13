import React from 'react'
import Products from '../Components/Products'
import Sale from '../Components/Sale'
import API from '../Api/API'

const Home = () => {

  return (
    <>
    <Sale />
    <Products />
    <API />
    </>
  )
}

export default Home