import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { ProjectData } from '../../data/projectData'
import './projects.css'

export default function Projects() {
    const data = ProjectData

    return (
        <div className="projects">
            <div className="section_header">
                <label className="section_title">PROJECTS</label>
                <div className="section_text">
                    Here are the projects I have worked on.
                    Also you can find more on my<a href="https://github.com/kim00432" className="my_github">GitHub</a>.
                </div>
            </div>
            <div className="project_card_container">
                {data.map((project) => {
                    return (
                    <div className="project_card" key={project.id}>
                        <div className="project_images">
                            <img src={project.image} className="project_image"/>
                        </div>
                        <div className="project_info">
                            <div className="project_title">{project.title}</div>
                            <div className="project_card_header">
                                <div className="project_links">
                                        {project.demo && 
                                        <a className="project_link link_button" href={project.demo}>
                                                <FaGlobe className="project_link_icon" />
                                                <span className="project_link_title">DEMO</span>
                                        </a>
                                        }
                                        {project.github && 
                                        <a className="project_link link_button" href={project.github}>
                                                <FaGithub className="project_link_icon"/>
                                                <span className="project_link_title">GITHUB</span>
                                        </a>}
                                </div>
                                <div className="project_techs">
                                        {project.techs.map((tech, index)=> {
                                            return <label className="project_tech" key={index}>{tech}</label>
                                        })}
                                </div>
                            </div>
                            <div className="project_description">{project.description}</div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
