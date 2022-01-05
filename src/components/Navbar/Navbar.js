import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <NavLink to="/" activeClassName="nav-link"><img src={logo} alt="logo"/></NavLink>
            </div>
            <div className="links">
                <a href="#about" activeClassName="nav-link">ABOUT ME</a>
                <a href="#project" activeClassName="nav-link">PROJECTS</a>
                <a href="#contact" activeClassName="nav-link">CONTACT</a>
            </div>
        </div>
    )
}
