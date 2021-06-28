import React from 'react'
import Separator from '../../common/separator/Separator'
import './work.css'
import {workData} from "../../data/work"
import WorkCard from "./WorkCard"

export default function Work() {
    const data=workData;
    return (
        <div className="work">
        <Separator />
        <label className="section-title">Work</label>
        <div className="work-list">
        {data.map((item)=>{
            return(
                <WorkCard item={item} />
            )
        })}
            
        </div>
        </div>
    )
}
