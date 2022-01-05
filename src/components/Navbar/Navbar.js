import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import './navbar.css'

export default function Navbar() {
    // Fixed navbar
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active", window.scrollY > 0)
    })

    // Toggle menu
    const [show, setShow] = useState(false)



    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
          {/* Toogle Menu */}
          <div className="toggle_menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-justify-right pointer"
              viewBox="0 0 16 16"
            >
               <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
          {show ?(
          <div className="sidebar_links">
            <ul className="sidebar_items">
                <a href="#about">
                    <li className="sidebar_item">ABOUT ME</li>
                </a>
                <a href="#project">
                    <li className="sidebar_item">PROJECTS</li>
                </a>
                <a href="#contact">
                    <li className="sidebar_item">CONTACT</li>
                </a>
              </ul>
          </div>
           ) : (
          <div className="navbar_links">
            <ul className="navbar_items">
              <a href="#about">
                  <li className="navbar_item">ABOUT ME</li>
              </a>
              <a href="#project">
                  <li className="navbar_item">PROJECTS</li>
              </a>
              <a href="#contact">
                  <li className="navbar_item">CONTACT</li>
              </a>
            </ul>
          </div>
           )}
        </div>
    )
}
