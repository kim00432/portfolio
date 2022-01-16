import React from 'react'
import './about.css'

export default function About() {
    return (
    <div className="about">
        <div className="terminal-header">
            <div className="right-side-buttons">
                <div className="close"></div>
                <div className="minimize"></div>
                <div className="full"></div>
            </div>
            <div className="title">
                <div className="title_text">@About me</div>
            </div>
        </div>
        <div className="terminal-window">
            <div className="statement" id="top">
                <p className="input">location &gt; 
                <span className="return">&nbsp;ottawa, canada</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">education &gt; 
                <span className="return">&nbsp;mobile application design &amp; development in algonquin college (Sep 2020 ~ present)</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">contact &gt; 
                <span className="return"><a href="mailto:isyoonakim@gmail.com">isyoonakim@gmail.com</a></span>
                </p>
            </div>
            <div className="statement">
                <p className="input">resume &gt; 
                <span className="return"><a href="https://drive.google.com/file/d/1RTEzArInvQYa_3GSBx7oY-gOq4-5GRFF/view?ths=true">yoonakim.pdf</a></span>
                </p>
            </div>
            <div className="statement">
                <p className="input">skills &gt;</p>
                <p className="return">front-end [ html, css, javascript, react/react native ]</p>
                <p className="return">back-end [ node js, express, npm, rest, mongo db, docker, aws, firebase ]</p>
                <p className="return">others [ github, vs code, adobe xd/photoshop/illustrator, figma ]</p>
            </div>
            <div className="statement">
                <p className="input">languages &gt;
                <span className="return">&nbsp;[ english, korean ]</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">interests &gt;
                <span className="return">&nbsp;[ traveling, photography, lego, watching movies/tv shows, music, coffee ]</span>
                </p>
            </div>
            <div className="statement" id="bottom">
                <p className="input"><span>&nbsp;</span></p>
            </div>
        </div>
  </div>
    )
}
