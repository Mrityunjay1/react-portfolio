import React from 'react'
import './body.css'
import About from './about/About'
import Skills from './skills/Skills'
import Contact from './contact/Contact' 
import Projects from './projects/Projects'
import Work from './work/Work'

export default function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}
