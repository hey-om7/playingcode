import React, { useState } from 'react'
import "./Topbar.scss"

export default function Topbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 330) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
        console.log(navbar);
    }
    window.addEventListener('scroll', changeBg);

    return (
        <div className={navbar ? "Topbar active" : "Topbar"}>
            <div className="spacedTabs">

            </div>
            <div className="tabs">

                <h2>
                    <a href="#home">Home</a>
                </h2>
                <h2>
                    <a href="#projects">
                        Projects
                    </a>

                </h2>
                <h2>
                    <a href="">
                        Hire
                    </a>
                </h2>
                <h2>
                    <a href="">
                        Support
                    </a>
                </h2>
                <h2>
                    <a href="">
                        Contact
                    </a>
                </h2>
            </div>

        </div>
    )
}
