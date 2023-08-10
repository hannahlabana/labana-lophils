import React from 'react'
import '../App.css';
import { IoMdSave, IoMdTrash } from "react-icons/io";
import { AiOutlineFilter } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function HeaderMain() {
  return (
    <div className="header">
        <div className="header-left">
          <input type="checkbox"></input>
          <div className="button-save tag">save <IoMdSave/></div>
          <div className="button-manage tag">manage filters <AiOutlineFilter/></div>
          <div className="vl"></div>
          <div className="button-delete tag">delete <IoMdTrash/></div>
        </div>
        <div className="header-right">
          <MdKeyboardArrowLeft size='20px'/>
          50 of 150
          <MdKeyboardArrowRight size='20px'/>
        </div>
    </div>
    
  )
}
