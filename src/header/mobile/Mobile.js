import React from 'react'
import './mobile.css'

export default function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#project" >
                <i class="fi-rr-book option-icon">Projects</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fi-rr-billiard option-icon">Skills</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="fi-rr-broom option-icon">Work</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact" >
                <i class="fi-rr-form option-icon">Contact</i>
                </a>
            </div>
            </div>
        </div>
    )
}
