import React from 'react'

// Bootstrap Grid imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component imports
import YouAreOneVideo from '../components/YouAreOneVideo';

function Steps() {
    return (
        <Container className='youAreOneContainer'>
            <Row>
                <Col className='youAreOneCol' sm={12}>
                    <h1 id='youAreOneText'>Remember</h1>
                </Col>
            </Row>
            <Row>
                <Col className='youAreOneMidCol' sm={12}>
                    <YouAreOneVideo />
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