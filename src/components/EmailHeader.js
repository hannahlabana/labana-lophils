import React from 'react'


export default function EmailHeader() {
  return (
    <div className="emailCard-header">
        <div className="emailCard-header-left">
        <input type="checkbox"></input>
        <span class="dot"></span>
        <div className="emailCard-header-left-date">
            <span>12</span>
            <span>Jan</span>
        </div>
        <span>TA</span>
        <div className="emailTitle">
            <div className="emailTitle-subject">
            <span>Fwd: New project 3</span>
            <span>&#123;NEW-10707/1715&#125;</span>
            </div>
            <div className="emailTitle-details">
            Leo M'anoban 
            <span>&lt;sbtest.khr@gmail.com&gt;</span>
            <div className="vl"></div>
            January 12, 2022 at 4:04 PM
            <div className="vl"></div>
            5
            </div>
        </div>
        </div>
        <div className="emailCard-header-right">
        <div className="tag">New Project 3</div>
        <div className="time">1 min</div>
        </div>
    </div>
  )
}
