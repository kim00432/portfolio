import React from 'react'
import Typical from 'react-typical'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './header.css'

export default function Header() {
    return (
    <div className="header">
            <div className="name">Hello, I am Yoona Kim.</div>
            
            <div className="text">
                {/* <div>I am...</div>
                <Typical 
                    loop={Infinity} 
                    steps={[
                        "A Developer, Designer, and Creator.", 
                        2000, 
                        "An enthusiastic learner.", 
                        2000, 
                        "A person who enjoys solving problems.",
                        2000
                    ]}
                /> */}
            </div>
            <div class="socialMedia">
                <ul>
                    <li><a href="https://github.com/kim00432" target="_blank" className='socialMedia-Link'><FaGithub /></a></li>
                    <li><a href="https://www.instagram.com/__yoonak/" target="_blank" className='socialMedia-Link'><FaInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/yoona-k" target="_blank" className='socialMedia-Link'><FaLinkedin /></a></li>
                </ul>
            </div>
    </div>
    )
}
