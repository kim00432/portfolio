import React, {useState} from 'react'
import logo from '../../img/logo.png'
import './navbar.css'

export default function Navbar() {
    // Toggle menu
    const [show, setShow] = useState(false)

    return (
        <div className="navbar">
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
          {/* Toggle Menu */}
          <div className="toggle_menu">
            <div>
                <svg onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={show? "white" : "black"}
                className="bi bi-justify-right"
                viewBox="0 0 16 16"
                >
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
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
