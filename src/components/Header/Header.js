import React from 'react'
import Typical from 'react-typical'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './header.css'

export default function Header() {
    return (
    <div className="header">
        <div className="name">Hi, my name is <span>Yoona Kim</span>.</div>
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
            <hr className="line"></hr>
            <ul>
                {/* <li>
                    <a href="https://www.instagram.com/__yoonak/" target="_blank" rel="noreferrer" className='socialMedia_link'><FaInstagram /></a>
                </li> */}
                {/* <li>
                    <a href="https://yoona.hashnode.dev/" target="_blank" rel="noreferrer" className='socialMedia_link'><SiHashnode /></a>
                </li> */}
                <li> 
                    <a href="https://github.com/kim00432" target="_blank" rel="noreferrer" className='socialMedia_link'><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/itsyoona" target="_blank" rel="noreferrer" className='socialMedia_link'><FaLinkedin /></a>
                </li>
            </ul>
        </div>
    </div>
    )
}
