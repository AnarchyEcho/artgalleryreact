import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

import Tiddy from "../media/tiddy.png"
import Pippy from "../media/pippy.jpg"
import Shibe from "../media/shibe.png"
import Dunkirk from "../media/dunkirk.png"
import Aoi from "../media/aoi.png"
import Aka from "../media/aka.png"
import Water from "../media/water.jpg"
import Rain from "../media/rain.jpg"
import Long from "../media/long.jpg"
import Cringe from "../media/cringe.jpg"
import Cute from "../media/cute.jpg"
import Arma from "../media/arma.jpg"
import Afk from "../media/afk.jpg"

export default function Portfolio(props) {
  return (
    <div className="seo-pics">
        <img src={Afk} alt="Seo bullshit" width="350px" height="350px"/>
        <img src={Arma} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Cute} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Cringe} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Long} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Rain} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Water} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Aka} alt="Seo bullshit" width="350px" height="350px"/>                
        <img src={Aoi} alt="Seo bullshit" width="350px" height="350px"/>        
        <img src={Dunkirk} alt="Seo bullshit" width="350px" height="350px"/>
        <img src={Shibe} alt="Seo bullshit" width="350px" height="350px"/>
        <img src={Pippy} alt="Seo bullshit" width="350px" height="350px"/>
        <img src={Tiddy}alt="Seo bullshit" width="350px" height="350px"/>
    </div>
  )
}