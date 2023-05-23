import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './PasscodeInput.css';
import './Smile.css';
import font from '../fonts/Lobster/Lobster-Regular.ttf'

const PasscodeInput = ({ onPasscodeSubmit }) => {

  const [passcode, setPasscode] = useState('');

  const handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPasscodeSubmit(passcode);
  };

  const lobster = {
    fontFamily:'lobster',
    textAlign:'left',
  }

  return (
    <Container  className='passcode-container'>
        <p className='p' style={lobster}>What's the password?</p>
        <Row>
        <Col md={4}></Col>
        <Col md={4}>
        <form onSubmit={handleSubmit}>
        <input type="password" value={passcode} onChange={handlePasscodeChange} />&nbsp;&nbsp;&nbsp;
        <button style={lobster} type="submit">Ok</button>
        </form>
        </Col>
        <Col md={4}></Col>
  

    </Row>
    </Container>
    
  );
};

export default PasscodeInput;
