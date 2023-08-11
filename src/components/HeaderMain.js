import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css';
import { IoMdSave, IoMdTrash } from "react-icons/io";
import { AiOutlineFilter } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { selectAll, resetSelect } from "../features/select/selectSlice";

export default function HeaderMain() {
  const email = useSelector(state => state.email.value)
  const dispatch = useDispatch()
  const [isCheck, setCheck] = useState(false);

  function isChecked(){
    if(!isCheck){
      dispatch(selectAll(email.length));
     } else {
      dispatch(resetSelect(email.length));
    }
    setCheck(!isCheck);
  }

  return (
    <div className="header">
        <div className="header-left">
          <input type="checkbox" checked={ isCheck } onChange={ isChecked }></input>
          <div className="button-save tag">save<IoMdSave style={{ marginLeft: 5 }} /></div>
          <div className="button-manage tag">manage filters<AiOutlineFilter style={{ marginLeft: 5 }}/></div>
          <div className="vl"></div>
          <div className="button-delete tag">delete<IoMdTrash style={{ marginLeft: 5 }}/></div>
        </div>
        <div className="header-right">
          <MdKeyboardArrowLeft size='20px'/>
          50 of 150
          <MdKeyboardArrowRight size='20px'/>
        </div>
    </div>
    
  )
}
