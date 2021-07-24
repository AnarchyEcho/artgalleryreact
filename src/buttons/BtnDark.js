// eslint-disable-next-line
import React, { useState } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import { faAdjust as Adjust } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import Light from "../media/lightmode.png"
// eslint-disable-next-line
import Dark from "../media/darkmode.png"

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
      margin: "5px",
   }

    const [Image, setImage] = React.useState(Light);
    // function that toggles targeted css from css file
    function darkmode() {
      element.classList.toggle("dark-mode");
      if (Image === Light) {setImage(Dark);}
      else if (Image === Dark) {setImage(Light);}
    }
    
    return (
    <div>
      <button onClick={darkmode} style={style}><img id="darkimg" src={Image} alt=""/></button>
    </div>
  );
}