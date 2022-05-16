import React from 'react'
import "./TopbarMobile.scss"

export default function TopbarMobile() {
    return (
        <div>
            <div className="blockMenu">
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

        </div>
    )
}
