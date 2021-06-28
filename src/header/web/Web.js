import React from 'react'
import './web.css'

export default function Web() {
    return (
        <div className="web"> 
            <div className="web-option">
                <a href="#project" >
                <i class="fi-rr-book option-icon">Projects</i>
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="fi-rr-billiard option-icon">Skills</i>
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="fi-rr-broom option-icon">Work</i>
                </a>
            </div>
            <div className="web-option">
                <a href="#contact" >
                <i class="fi-rr-form option-icon">Contact</i>
                </a>
            </div>
        </div>
    )
}
