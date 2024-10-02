import React from 'react'

// Component imports
import IntroQuestions from '../components/IntroQuestions'

// Bootstrap Grid imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
    return (
        <Container className='introGridContainer'>
            <Row>
                <Col sm={12}>
                    <IntroQuestions />
                </Col>
            </Row>
            <Row>
                <Col className='introImgCol' sm={12}>
                    <img className='introImg' src="./vinyl.png" alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Intro