import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import portrait from "../media/pinkgirl.png"

export default function Portrait() {
  return (
    <>
      <img src={portrait} alt="Portrait of author" width="500px"></img>
    </>
  );
}