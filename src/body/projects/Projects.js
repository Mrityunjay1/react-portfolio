import React from 'react'
import './projects.css'
import {Project} from '../../../src/data/Project'
import Projectcard from './Projectcard';
import Separator from "../../../src/common/separator/Separator"

export default function Projects() {
    const data=Project;
    return (
        <div className="projects">
        <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <Projectcard project={project} />
                })}
            </div>
        </div>
    )
}
