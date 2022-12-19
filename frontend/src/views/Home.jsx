import React from 'react'
import Products from '../Components/Products'
import Sale from '../Components/Sale'
import API from '../Api/API'
import MiddleSection from '../Components/MiddleSection'
import Footer from '../Components/Footer'

const Home = () => {

      /* - Single Responsibility Pinciple - 
      Den här hanterar enbart mina komponenter som ska visas på Home sidan och följer Single Responsibility Principle. */

      /* - Open Closed Pinciple - 
      Vi kommer aldrig behöva ändra någonting här men vi kan extenda genom att lägga till nya 
      komponenter och följer därför Open Closed Principle */

  return (
    <>
    <Sale />
    <Products />
    <API />
    <MiddleSection />
    <Footer />
    </>
  )
}

export default Home