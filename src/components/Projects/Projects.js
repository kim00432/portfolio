import React, { useState, useEffect } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { ProjectData } from '../../data/projectData'
import './projects.css'

export default function Projects() {
    const data = ProjectData
    const [category, setCategory] = useState("all")
    const [projects, setProjects] = useState([])

    console.log(data)
    useEffect(() => {setProjects(category)}, [])
    
    useEffect(() => {
        setProjects([])
        const filtered = data.map(p => ({ ...p, filtered: p.category.includes(category) }))
        setProjects(filtered);
    }, [category])

    return (
        <div className="projects">
            <div className="section_header">
                <label className="section_title">PROJECTS</label>
                <div className="section_text">
                    Here are the projects I have worked on.
                    Also you can find more on my<a href="https://github.com/kim00432" className="my_github">GitHub</a>.
                </div>
            </div>
            <div className="category_buttons_container">
                    <button className="category_button" onClick={() => setCategory("all")}>All</button>
                    <button className="category_button" onClick={() => setCategory("development")}>Development</button>
                    <button className="category_button" onClick={() => setCategory("design")}>UX/UI</button>
            </div>
            <div className="project_card_container">
                {projects.map(item => item.filtered === true ? (
                <div className="project_card" key={item.id}>
                    <div className="project_images">
                        <img src={item.image} alt="projectImage" className="project_image"/>
                    </div>
                    <div className="project_info">
                        <div className="project_title">{item.title}</div>
                        <div className="project_card_header">
                            <div className="project_links">
                                    {item.demo && 
                                    <a className="project_link link_button" href={item.demo}>
                                            <FaGlobe className="project_link_icon" />
                                            <span className="project_link_title">DEMO</span>
                                    </a>
                                    }
                                    {item.github && 
                                    <a className="project_link link_button" href={item.github}>
                                            <FaGithub className="project_link_icon"/>
                                            <span className="project_link_title">GITHUB</span>
                                    </a>}
                            </div>
                            <div className="project_techs">
                                    {item.techs.map((tech, index)=> {
                                        return <label className="project_tech" key={index}>{tech}</label>
                                    })}
                            </div>
                        </div>
                        <div className="project_description">{item.description}</div>
                    </div>
                </div>
              ) : '')}
            </div>
        </div>
    )
}
