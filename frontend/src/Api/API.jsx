import Product from "../Components/Product"
import { useEffect, useState } from "react"
const API = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
    
      const getPosts = async () => {
        try {
          
          const res = await fetch('https://localhost:7025/api/Product')
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
         {
      products.length > 0 ? products.map(product => (
        <Product key={product.id} product={product} />
        ))
        : <div>There are currently no featured products!</div>
      }
        </>
      )
    }
    
    export default API