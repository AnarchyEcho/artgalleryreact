import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

import Afk from "../media/afk.jpg"
import Arma from "../media/arma.jpg"
import Cute from "../media/cute.jpg"
import Cringe from "../media/cringe.jpg"
import Long from "../media/long.jpg"
import Rain from "../media/rain.jpg"
import Water from "../media/water.jpg"
import Aka from "../media/aka.png"
import Aoi from "../media/aoi.png"
import Dunkirk from "../media/dunkirk.png"
import Shibe from "../media/shibe.png"
import Pippy from "../media/pippy.jpg"
import Tiddy from "../media/tiddy.png"

export default function Portfolio() {
  return (
    <div className="seo-pics">
        <img src={Afk} alt="Immy's Fursona" width="350px" height="350px"/>
        <img src={Arma} alt="Immy as an arma character with a duck to her left" width="350px" height="350px"/>        
        <img src={Cute} alt="Immy self insert portrait" width="350px" height="350px"/>        
        <img src={Cringe} alt="Animal Crossing special where Immy is holding an AC character" width="350px" height="350px"/>        
        <img src={Long} alt="Album cover for Longcoats" width="350px" height="350px"/>        
        <img src={Rain} alt="Immy and dog in the rain at a crossing" width="350px" height="350px"/>        
        <img src={Water} alt="Immy laying on her back floating in the water" width="350px" height="350px"/>        
        <img src={Aka} alt="Red japanese style assassin" width="350px" height="350px"/>                
        <img src={Aoi} alt="Blue japanese style assassin" width="350px" height="350px"/>        
        <img src={Dunkirk} alt="Man standing in front of a burning plane crash" width="350px" height="350px"/>
        <img src={Shibe} alt="Immy and dog looking over the ocean with a cup of steaming tea" width="350px" height="350px"/>
        <img src={Pippy} alt="Fat cat" width="350px" height="350px"/>
        <img src={Tiddy} alt="Japanese style assassin with heterochromia of blue and green eyes" width="350px" height="350px"/>
    </div>
  )
}