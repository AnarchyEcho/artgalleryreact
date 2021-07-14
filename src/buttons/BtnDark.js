// eslint-disable-next-line
import React, { useState } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust as Adjust } from '@fortawesome/free-solid-svg-icons'



export default function BtnDark() {
    // target for darkmode css toggling
    const element = document.body;
    
    // css for the button
    const style = {
      position: "absolute",
      top: "0",
      right: "0",
      background: "none",
      color: "#971033",
      borderRadius: "3%",
      fontSize: "3em",
      cursor: "pointer",
      border: "none",
      margin: "5px"
   }

    // function that toggles targeted css from css file
    function darkmode() {
      element.classList.toggle("dark-mode");
    }
    return (
    <div>
      <button onClick={darkmode} style={style}><FontAwesomeIcon icon={Adjust} /></button>
    </div>
  );
}