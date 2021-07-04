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
        <img src={Afk} width="350px" height="350px" alt="Immy's Fursona"/>
        <img src={Arma} width="350px" height="350px" alt="Immy as an arma character with a duck to her left"/>        
        <img src={Cute} width="350px" height="350px" alt="Immy self insert portrait"/>        
        <img src={Cringe} width="350px" height="350px" alt="Animal Crossing special where Immy is holding an AC character"/>        
        <img src={Long} width="350px" height="350px" alt="Album cover for Longcoats"/>        
        <img src={Rain} width="350px" height="350px" alt="Immy and dog in the rain at a crossing"/>        
        <img src={Water} width="350px" height="350px" alt="Immy laying on her back floating in the water"/>        
        <img src={Aka} width="350px" height="350px" alt="Red japanese style assassin"/>                
        <img src={Aoi} width="350px" height="350px" alt="Blue japanese style assassin"/>        
        <img src={Dunkirk} width="350px" height="350px" alt="Man standing in front of a burning plane crash"/>
        <img src={Shibe} width="350px" height="350px" alt="Immy and dog looking over the ocean with a cup of steaming tea"/>
        <img src={Pippy} height="350px" width="350px" alt="Fat cat"/>
        <img src={Tiddy} width="350px" height="350px" alt="Japanese style assassin with heterochromia of blue and green eyes"/>
    </div>
  )
}