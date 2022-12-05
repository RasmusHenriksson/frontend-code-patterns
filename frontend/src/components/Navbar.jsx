import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container flex">
            <ul className="flex navbar-nav">
            <div className="router-links">
                <li><NavLink className="nav-link" to="/" end>Home</NavLink></li>
                <li><NavLink className="nav-link" to="/blogg" >Categories</NavLink></li>
                <li><NavLink className="nav-link" to="/Images" >Products</NavLink></li>
                <li><NavLink className="nav-link" to="/Images" >Contacts</NavLink></li>
            </div>
                </ul>
                  </div>               
    </nav>
  )
}

export default Navbar