import React from 'react'
import Typical from 'react-typical'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './header.css'

export default function Header() {
    return (
    <div className="header">
            <div className="name">Hi, my name is YOONA KIM.</div>
            <div className="text">
                <div>I am...</div>
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
                />
            </div>
            <div className="socialMedia">
                <ul>
                    <hr className="line"></hr>
                    <a href="https://github.com/kim00432" target="_blank" className='socialMedia_link'><li><FaGithub /></li></a>
                    <a href="https://www.instagram.com/__yoonak/" target="_blank" className='socialMedia_link'><li><FaInstagram /></li></a>
                    <a href="https://www.linkedin.com/in/yoona-k" target="_blank" className='socialMedia_link'><li><FaLinkedin /></li></a>
                </ul>
            </div>
    </div>
    )
}
