import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import portrait from "../media/pinkgirl.png"

export default function Portrait() {
  return (
    <>
      <a href="https://www.instagram.com/p/CNNl_5uh5iR/?utm_source=ig_web_copy_link%27%7D" target="_blank" rel="noreferrer">
      <img src={portrait} id="portraitimage" alt="Portrait of author" width="500px"></img>
      </a>
    </>
  );
}