import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <NavLink to="/" activeClassName="nav-link"><img src={logo} alt="logo"/></NavLink>
            </div>
            <div className="links">
                <NavLink to="/about" activeClassName="nav-link">About Me</NavLink>
                <NavLink to="/projects" activeClassName="nav-link">Projects</NavLink>
                <NavLink to="/contact" activeClassName="nav-link">Contact</NavLink> 
            </div>
        </div>
    )
}
