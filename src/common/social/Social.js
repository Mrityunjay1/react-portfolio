import React from 'react'
import './social.css'
import {Socials} from '../../../src/data/Socials'

export default function Social() {
    const data= Socials;
    return (
        <div className="social-contact">
            {data.map((obj)=>{
                return(
                    <a href={obj.link}>
                        <div className="social-icon-div">
                            <img src={obj.icon} className="social-icon" alt="social-icon"/>
                        </div>
                    </a>

                )
            })}
        </div>
    )
}
