import React, {useState} from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import logo from '../../img/logo.png'
// import './navbar.css'

export default function Navbar() {

    // Toggle menu
    const [show, setShow] = useState(false)

    return (
        <div className="navbar">
            <div className='navbar_container'>
                <div className="logo">
                    <a href="/"><img src={logo} alt="logo"/></a>
                </div>
                <div className="navbar_links">
                    <ul className="navbar_items">
                    <a href="#about">
                        <li className="navbar_item">ABOUT ME</li>
                    </a>
                    <a href="#projects">
                        <li className="navbar_item">PROJECTS</li>
                    </a>
                    <a href="#contact">
                        <li className="navbar_item">CONTACT</li>
                    </a>
                    </ul>
                </div>
            </div>
          {/* Toggle Menu */}
          <div className="toggle_menu">
            <div onClick={() => setShow(!show)}>
                <HiOutlineMenuAlt3 className="menu_icon" color={show? "white" : "black"}/>
            </div>
          </div>
          {show? (
          <div className="sidebar_links">
            <ul className="sidebar_items">
                <a href="#about" onClick={() => setShow(!show)}>
                    <li className="sidebar_item">ABOUT ME</li>
                </a>
                <a href="#projects" onClick={() => setShow(!show)}>
                    <li className="sidebar_item">PROJECTS</li>
                </a>
                <a href="#contact" onClick={() => setShow(!show)}>
                    <li className="sidebar_item">CONTACT</li>
                </a>
              </ul>
          </div>) : null}
        </div>
    )
}
