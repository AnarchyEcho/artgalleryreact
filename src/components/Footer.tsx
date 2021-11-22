import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// @ts-ignore
import Style from "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram as Insta, faTwitter as Twt, } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div id="footer">
      <div id="copyright">
        <p>ALL MEDIA AND CONTENT IS &copy;COPYRIGHT OF <a href="https://www.instagram.com/immu.jpg/" target="_blank" rel="noreferrer">IMMU.JPG</a></p>
        <p>&copy; Copyright 2021 <a href="https://github.com/anarchytrex" target="_blank" rel="noreferrer">Andre Hagen</a></p>
      </div>

      <div id="links">
        <p><b>Link to my medias</b></p>
        <a href="https://www.instagram.com/immu.jpg/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={Insta} /> Instagram</a> <br />
        <a href="https://twitter.com/immu_jpg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={Twt} /> Twitter</a>
      </div>

      <div id="contact">
        <p><b>Contact me</b></p>
        <p><a href = "mailto: immyroseclark@gmail.com">Send me an email</a></p>
      </div>
    </div>
  );
}