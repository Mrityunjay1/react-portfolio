import React from 'react'
import './projectcard.css'

export default function Projectcard({project}) {
    return (
        <div className="project-card">

        <div className="project-info">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
                {project.demo && (<a className="project-link" href={project.demo}>
                    <div className="link-button">
                    <i class="fi-rr-globe">Demo</i>
                    </div>
                </a>)}
                {project.github &&(
                    <a className="project-link" href={project.github}>
                    <div className="link-button">
                    <i class="devicon-github-original colored">Github</i>
                    </div>
                </a>
                )}
            </div>
            <p>{project.about}</p>
            <div className="project-tags">
                {project.tags.map((tag)=>{
                    return(
                        <label className="tag">{tag}</label>
                    )
                })}
            </div>

        </div>
        <img src={project.image} className="project-photo" alt="project" />
            
        </div>
    )
}
