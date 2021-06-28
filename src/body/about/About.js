import React from 'react'
import Social from '../../common/social/Social'
import './about.css'

export default function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There,I am <br /> <span className="info-name">Mrutunjay Singh</span><br /> Love Coding FrontEnd.
                </div>
                <div className="about-photo">
                    <img src={require('../../../src/assets/coding.png').default} className="picture"  alt="new"/>
                </div>
            </div>
            <Social />
        </div>
    )
}
