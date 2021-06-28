import React from 'react'
import "./work.css"
export default function WorkCard({item}) {
    return (
        <div className="work-card">
        <img src={item.companylogo} className="work-logo" />
        <div className="work-info">
            <label className="company-name">{item.company}</label>
            <div>
                <label className="work-dates">{item.datejoin}</label><label>{item.dateend}</label>
            </div>
            <div className="work-desc">
                <p>{item.description}</p>
            </div>
        </div>
            
        </div>
    )
}
