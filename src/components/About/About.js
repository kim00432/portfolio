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
                <p className="input">Location &gt; 
                <span className="return">&nbsp;Ottawa, Canada</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">Education &gt; 
                <span className="return">&nbsp;Mobile application Design &amp; Development in algonquin college (Sep 2020 ~ May 2022)</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">Contact &gt; 
                <span className="return"><a href="mailto:itsyoona.dev@gmail.com">itsyoona.dev@gmail.com</a></span>
                </p>
            </div>
            {/* <div className="statement">
                <p className="input">Resume &gt; 
                <span className="return"><a href="">Yoonakim.pdf</a></span>
                </p>
            </div> */}
            <div className="statement">
                <p className="input">Skills/<b>Programming</b> &gt;
                <span className="return">&nbsp;[ HTML/CSS, JavaScript, React/React native, PWAs, Node.js, Express, Firebase, APIs ]</span></p>
            </div>
            <div className="statement">
                <p className="input">Skills/<b>Design</b> &gt;
                <span className="return">&nbsp;[ User/Product Research, Personas&amp;Usage Scenarios, Information Architecture, Wireframing, Interactive Prototyping, Usability Testing ]</span></p>
            </div>
            <div className="statement">
                <p className="input">Skills/<b>Tools</b> &gt;
                <span className="return">&nbsp;[ Git/Github, VS Code, Adobe XD/Photoshop/Illustrator, Figma ]</span></p>
            </div>
            <div className="statement">
                <p className="input">Languages &gt;
                <span className="return">&nbsp;[ English, Korean ]</span>
                </p>
            </div>
            <div className="statement">
                <p className="input">Interests &gt;
                <span className="return">&nbsp;[ Traveling, Photography, Lego, Watching movies/tv shows, Music, Coffee ]</span>
                </p>
            </div>
            <div className="statement" id="bottom">
                <p className="input"><span>&nbsp;</span></p>
            </div>
        </div>
  </div>
    )
}
