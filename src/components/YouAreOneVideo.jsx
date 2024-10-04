import React, { useState } from "react";

import '../main.css'

function YouAreOneVideo() {

    const [videoDisplay, setVideoDisplay] = useState("inline-block");

    const [afterVideoDisplay, setAfterVideoDisplay] = useState("none");

    const style = {
        video: {
            display: videoDisplay
        },
        afterVideo: {
            display: afterVideoDisplay
        }
    }

    function turnOffDisplay() {
        setVideoDisplay("none")
    }

    function turnOnDisplay() {
        setAfterVideoDisplay("inline-block")
    }

    return (
        <div>
            <video onEnded={() => { turnOffDisplay(), turnOnDisplay() }} style={style.video} className='youAreOneVideo' autoPlay muted>
                <source src="./you-are-one.mp4" type="video/mp4" />
            </video>
            <button style={style.afterVideo} className="youAreOneBtn"></button>
        </div>
    )
}

export default YouAreOneVideo