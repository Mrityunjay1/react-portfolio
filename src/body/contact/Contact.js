import React from 'react'
import './contact.css'
import Separator from '../../common/separator/Separator'
import Social from "../../common/social/Social"

export default function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Feel Free to Contact on the links provided</p>
                    <Social />
                </div>
                <div className="download">
                    <a download href={require('../../assets/Mrutunjay_Singh_Frontend.pdf').default}>Download Resume</a>
                </div>
            </div>
        </div>
    )
}
