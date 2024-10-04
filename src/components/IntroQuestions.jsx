import React, { useState } from "react";
import { LinkContainer } from 'react-router-bootstrap'

// Use Sound plugin import
import useSound from 'use-sound';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';

// Data imports
import questions from '../data/questions.json';

const alertSound = './alert.mp3'

function IntroQuestions() {

    const [count, setCount] = useState(0);

    const [btnDisplay, setBtnDisplay] = useState("inherit");

    const [lastBtnDisplay, setLastBtnDisplay] = useState("none");

    const style = {
        initialBtns: {
            display: btnDisplay
        },
        lastBtn: {
            display: lastBtnDisplay
        }
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    const [play, { stop }] = useSound(alertSound, { volume: 1 });

    return (
        <>
            <div className='introQ'>
                <h1>{questions[count].question}</h1>
                <div className='optionBtns'>
                    <Button onClick={() => {
                        if (count === 2) {
                            setBtnDisplay("none");
                            setLastBtnDisplay("inherit");
                            incrementCount();
                            stop();
                            play();
                        } else if (count < 2) {
                            incrementCount();
                            stop();
                            play();
                        }
                    }}
                        className='optionBtn' style={style.initialBtns} variant="outline-dark">Yes</Button>
                    <Button className='optionBtn' style={style.initialBtns} id='noBtn' variant="outline-dark">No</Button>
                    <LinkContainer style={style.lastBtn} to="/steps">
                        <Button className='optionBtn' style={style.lastBtn} variant="outline-dark"><span className="lastOptionBtn">Yes!</span></Button>
                    </LinkContainer>
                </div>
            </div>
            <h2 className='hiddenMessage'>Try the Substance</h2>
        </>
    )
}

export default IntroQuestions