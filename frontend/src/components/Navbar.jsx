import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

{/* - Single Responsibility Pinciple - 
         Den här hanterar enbart mina routes i navbaren och följer Single Responsibility Principle. */}

      /* - Open Closed Pinciple - 
      Vi kommer aldrig behöva ändra någonting här men vi kan extenda genom att lägga till nya 
      routes i navbaren och följer därför Open Closed Principle */

  return (
    <nav className='navbar'>
        <div className="container flex">
            <ul className="flex navbar-nav">
                <div className="fixxo-tag">Fixxo.</div>
                <li><NavLink className="nav-link" to="/" end>Home</NavLink></li>
                <li><NavLink className="nav-link" to="/categories" >Categories</NavLink></li>
                <li><NavLink className="nav-link" to="/products" >Products</NavLink></li>
                <li><NavLink className="nav-link" to="/contacts" >Contacts</NavLink></li>

                <li><NavLink className="shop-details" to="/search" >Search</NavLink></li>
                <li><NavLink className="shop-details" to="/compare" >Compare</NavLink></li>
                <li><NavLink className="shop-details" to="/favourites" >Favourites</NavLink></li>
                <li><NavLink className="shop-details" to="/cart" >Cart</NavLink></li>
            </ul>
           
                  </div>               
    </nav>
  )
}

export default Navbar