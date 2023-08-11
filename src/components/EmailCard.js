import React, {useState} from 'react'
import {Collapse} from 'react-collapse';
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function EmailCard() {
    const [isCollapse, setCollapse] = useState(false);

    function handleClick() {
        setCollapse(!isCollapse);
    }

  return (  
    <div className="emailCard">
        <div className="emailCard-header">
        <div className="emailCard-header-left">
            <RxDragHandleDots2 size='20px'/>
            <input type="checkbox"></input>
            <span class="dot"></span>
            <div className="emailCard-header-left-date">
                <span className="emailCard-header-date">12</span>
                <span className="emailCard-header-month">Jan</span>
            </div>
            <span className="user">TA</span>
            <div className="emailTitle">
                <div className="emailTitle-subject">
                <span className="title">Fwd: New project 3</span>
                <span className="ticket ">&#123;NEW-10707/1715&#125;</span>
                </div>
                <div className="emailTitle-details">
                    <div className="emailTitle-details-name">Leo M'anoban</div>
                    <div className="emailTitle-details-info">
                        <span>&lt;sbtest.khr@gmail.com&gt;</span>
                        <span>January 12, 2022 at 4:04 PM</span>
                        <span className="vl2"></span>
                        <div className="attachments"><span ><BsPaperclip size='15px'/> 5 </span></div>
                    </div>
                </div>
            </div>
            </div>
        <div className="emailCard-header-right">
            {isCollapse ? 
                <div></div> :
                (<div className="tags">
                    <div className="tag tags-item">New Project 3/admin</div>
                    <div className="tag tags-item">New Project 3</div>
                    <div className="tag tags-item">Mountain Homes Construction/New Matter</div>
                    <div className="tag tags-item">  Mountain Homes Construction</div>
                </div>)
            }
            
            <div className="tag time">< AiOutlineClockCircle/>1 min</div>
            <div className="collapseIcon" onClick={handleClick}>
                {isCollapse ? <MdKeyboardArrowRight size="20px"/> : <MdKeyboardArrowDown size="20px"/>}
            </div>
        </div>
        </div>
        <Collapse isOpened={isCollapse}>
            <div className="emailCard-body">
                <hr></hr>
                <div className="emailCard-body-text">
                    <div className="emailCard-body-text-left">
                        <div>Leo M'anoban</div><span>12 Jan 2021 03:41 PM</span>
                    </div>
                    <div className="emailCard-body-text-right">
                    {!isCollapse ? 
                        <div></div> :
                        (<div className="tags">
                            <div className="tag tags-item">New Project 3/admin</div>
                            <div className="tag tags-item">New Project 3</div>
                            <div className="tag tags-item">Mountain Homes Construction/New Matter</div>
                            <div className="tag tags-item">  Mountain Homes Construction</div>
                        </div>)
                    }
                    </div>
                </div>
                <div className="emailCard-body-footer">
                    <div>--------- Forwarded message ---------</div>
                    <div>From: <b>Leo M'anoban</b> &lt;<a href="/">sbtest.khr@gmail.com</a>&gt;</div>
                    <div>Date: Mon, Feb 8, 2021 at 4:36 PM</div>
                    <div>Subject: New project 3 &#123;NEW-10707/1715&#125;</div>
                    <div>To: Isabel Bowen &lt;<a href="/">sbtest.isabel@gmail.com</a>&gt;</div>
                </div>              
            </div>
        </Collapse>
  </div>
  )
}
