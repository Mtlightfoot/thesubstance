import React from 'react'

// Bootstrap Grid imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps() {
    return (
        <Container className='youAreOneContainer'>
            <Row>
                <Col className='youAreOneCol' sm={12}>
                    <h1 id='youAreOneText'>Remember</h1>
                </Col>
            </Row>
            <Row>
                <Col className='youAreOneCol' sm={12}>
                    <div>
                        <video className='youAreOneVideo' autoPlay muted>
                            <source src="./you-are-one.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='youAreOneCol' sm={12}>
                    <h1 id='youAreOneText'>You Are One</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default Steps