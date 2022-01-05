import React from 'react'
import Header from '../../Header/Header'
import About from '../../About/About'
import Projects from '../../Projects/Projects'
import Contact from '../../Contact/Contact'
import Footer from '../../Footer/Footer'

export default function Home() {
    return (
        <div>
            <section id="header">
                <Header />
            </section>
            <div className="body">
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            <section id="Footer">
                <Footer />
            </section>
        </div>
    )
}
