import React from 'react'
import './skill-card.css'

export default function Skillcard({skill}) {
    return (
        <div className="skill-card">
        <div className="skill-icon">{skill.icon}</div> 
        <label className="skill-name">{skill.name}</label>
            
        </div>
    )
}
