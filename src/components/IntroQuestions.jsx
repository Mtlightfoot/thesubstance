import React from 'react'

// React Bootstrap imports
import Button from 'react-bootstrap/Button';


function IntroQuestions() {
    return (
        <>
        <div className='introQ'>
            <h1>Have you ever dreamt of a better version of yourself?</h1>
            <div className='optionBtns'>
                <Button className='optionBtn' id='yesBtn' variant="outline-dark">Yes</Button>
                <Button className='optionBtn' id='noBtn' variant="outline-dark">No</Button>
            </div>
        </div>
            <h2 className='hiddenMessage'>Try the Substance</h2>
        </>
    )
}

export default IntroQuestions