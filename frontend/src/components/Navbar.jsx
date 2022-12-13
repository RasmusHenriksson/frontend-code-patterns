import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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