import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul className='nav'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Contact</NavLink>

            </li>
            <li>
            <NavLink to="/about">About</NavLink>

            </li>
            <li>
            <NavLink to="/service">Service</NavLink>

            </li>
            <li>
            <NavLink to="/nest">Nest</NavLink>

            </li>
        </ul>

    </div>
  )
}

export default Navbar