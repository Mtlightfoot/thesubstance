import React, { useState } from "react";

// Use Sound plugin import
import useSound from 'use-sound';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';

// Data imports
import questions from '../data/questions.json';

const alertSound = './alert.mp3'


function IntroQuestions() {

    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    const [play, { stop }] = useSound(alertSound, { volume: 1 });

    return (
        <>
            <div className='introQ'>
                <h1>{questions[count].question}</h1>
                <div className='optionBtns'>
                    <Button onClick={(e) => {
                        if (count === 2) {
                            e.target.style.display = 'none';
                            incrementCount();
                            stop();
                            play();
                        } else if (count < 2) {
                            incrementCount();
                            stop();
                            play();
                        }
                    }}
                        className='optionBtn' id='yesBtn' variant="outline-dark">Yes</Button>
                    <Button className='optionBtn' id='noBtn' variant="outline-dark">No</Button>
                </div>
            </div>
            <h2 className='hiddenMessage'>Try the Substance</h2>
        </>
    )
}

export default IntroQuestions