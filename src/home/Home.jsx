import React from 'react'
import "./Home.scss"
import bgImg from "../assets/ocean_bg.jpeg";
import arrowDown from "../assets/arrow_down.png"

export default function Home() {
    return (
        <div className='Home' id="home">
            <div className="bgImage">
                <img src={bgImg} alt="" />
            </div>
            <h1>Playing Code</h1>
            <div className="arrowDownImg">
                <img src={arrowDown} alt="" />
            </div>
        </div>
    )
}
