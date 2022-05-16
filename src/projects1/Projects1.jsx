import React from 'react'
import "./Projects1.scss"
import playstoreLogo from "../assets/playstore.png"
import Dentolearn from '../projects/dentolearn/Dentolearn';

export default function Projects() {
    return (
        <div className='Projects1' id="projects">
            <div className="ProjectHeading">
                <div className="leftCol">
                    <h2>Checkout our <br />projects on <br />playstore</h2>

                </div>
                <div className="rightCol">
                    <div className="playStoreImg">
                        <img src={playstoreLogo} alt="" />
                    </div>
                </div>
            </div>

            <Dentolearn></Dentolearn>
        </div>
    )
}
