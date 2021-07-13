import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

export default function About() {
  return (
    <div id="footer">
      <div id="copyright">
        <p>ALL MEDIA AND CONTENT IS &copy;COPYRIGHT OF IMMU.JPG</p>
        <p>&copy; Copyright 2021 <a href="https://github.com/KodeAndre" target="_blank" rel="noreferrer">Andre Hagen</a></p>
      </div>

      <div id="links">
        <p><b>Link to Immy's Medias</b></p>
        <a href="https://www.instagram.com/immu.jpg/" target="_blank" rel="noreferrer">Instagram</a>
      </div>

      <div id="contact">
        <p><b>Contact me</b></p>
        <p><a href = "mailto: immyroseclark@gmail.com">Send me an email</a></p>
      </div>
    </div>
  );
}