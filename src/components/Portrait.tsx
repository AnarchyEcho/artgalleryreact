import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// @ts-ignore
import Style from "../style.css"
// eslint-disable-next-line
import portrait from "../media/pinkgirl.png"

export default function Portrait() {
  
  const phone = 
    <>
      <a href="https://www.instagram.com/p/CNNl_5uh5iR/?utm_source=ig_web_copy_link%27%7D" target="_blank" rel="noreferrer">
      <img src={portrait} id="portraitimage" alt="Portrait of author" width="500px"></img>
      </a>
    </>
  
  const desktop = 
  <>
    <iframe 
      name="slideshow"
      id="slideshow"
      scrolling="no"
      src="https://drive.google.com/embeddedfolderview?id=1G4WQaQcv2Tfcb3wyojzT45kjA8ctxFwU#grid"
      title="Immy's commercial art">
      </iframe>
  </>

  if (window.matchMedia("(max-width: 720px)").matches)
    return phone
  else
    return desktop
}