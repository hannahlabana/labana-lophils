import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Collapse } from 'react-collapse';
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { isSelected, selectAll, resetSelect } from "../features/select/selectSlice";


export default function EmailCard({email, index}) {
    const [isCollapse, setCollapse] = useState(false);
    const [tagString, setTagString ] = useState([]);
    const [dateString, setDateString] = useState(new Date());

    function handleClick() {
        setCollapse(!isCollapse);
    }

    useEffect(() => {
        setTagString(email.tags.split(", "));
        setDateString(new Date(email.date));
    }, []);

    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const select = useSelector(state => state.select.value)
    const dispatch = useDispatch()

  return (  
    <div className="emailCard">
        <div className="emailCard-header">
        <div className="emailCard-header-left">
            <RxDragHandleDots2 size='20px'/>
            <input type="checkbox" checked={select[index]} onChange={ () => dispatch(isSelected(index)) }></input>
            <span className="dot"></span>
            <div className="emailCard-header-left-date">
                <span className="emailCard-header-date">{ dateString.getDate() }</span>
                <span className="emailCard-header-month">{ monthName[dateString.getMonth()] }</span>
            </div>
            <span className="user">TA</span>
            <div className="emailTitle">
                <div className="emailTitle-subject">
                <span className="title">{ email.subject }</span>
                <span className="ticket ">&#123;NEW-10707/1715&#125;</span>
                </div>
                <div className="emailTitle-details">
                    <div className="emailTitle-details-name">{ email.sender_name }</div>
                    <div className="emailTitle-details-info">
                        <span>&lt;{ email.sender_email }&gt;</span>
                        <span>{email.date} at 4:04 PM</span>
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
                    {
                        tagString.map( tag => {
                            return (
                                <div key={tag} className="tag tags-item">{tag}</div>
                            )
                        })
                    }
                </div>)
            }
            
            <div className="tag time">< AiOutlineClockCircle/>1 min</div>
            <div className="collapseIcon" onClick={handleClick}>
                {isCollapse ? <MdKeyboardArrowRight size="30px"/> : <MdKeyboardArrowDown size="30px"/>}
            </div>
        </div>
        </div>
        <Collapse isOpened={isCollapse}>
            <div className="emailCard-body">
                <hr></hr>
                <div className="emailCard-body-text">
                    <div className="emailCard-body-text-left">
                        <div>{ email.sender_name }</div><span>{ dateString.getDate()} { monthName[dateString.getMonth()] } { dateString.getFullYear() } 03:41 PM</span>
                    </div>
                    <div className="emailCard-body-text-right">
                    {!isCollapse ? 
                        <div></div> :
                        (<div className="tags">
                            {
                                tagString.map( tag => {
                                    return (
                                        <div key={tag} className="tag tags-item">{tag}</div>
                            )
                        })
                    }
                </div>)
                    }
                    </div>
                </div>
                <div className="emailCard-body-content">
                    { email.content }    
                </div>
                <div className="emailCard-body-footer">
                    <div>--------- Forwarded message ---------</div>
                    <div>From: <b>{ email.sender_name }</b> &lt;<a href="/">{ email.sender_email }</a>&gt;</div>
                    <div>Date: Mon, { email.date } at 4:36 PM</div>
                    <div>Subject: { email.subject } &#123;NEW-10707/1715&#125;</div>
                    <div>To: Isabel Bowen &lt;<a href="/">sbtest.isabel@gmail.com</a>&gt;</div>
                </div>              
            </div>
        </Collapse>
  </div>
  )
}
