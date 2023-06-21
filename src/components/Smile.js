import React, { useState } from 'react';
import './Smile.css';
import font from '../fonts/Lobster/Lobster-Regular.ttf';
import sunshine from '../img/download.png'
const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const compliments = [

    'I love your smile, Baby Doll ❤️',
    'I feel lucky to have you, ❤️ Darling', 
    'You have pretty eyes, Sunshine',
    'You are my Heartbeat, Cuddlebug ❤️',
    'I love kissing you ❤️',
    'You are so beautiful, Honeydew ❤️ ',
    'I love your natural beauty, 😘 Teddy Bear',
    'I love your curves, Cutie Pie ❤️',
    'You complete me, Love ❤️',
    ' 😘 I love your natural body  ',
    'True love exists in you, 😘 Velvet',
    'Am glad you are my girlfriend, Vera 😘 ',
    'You are my better half, Dolly ❤️',
    'You are my missing piece, Starlight ❤️',
    ' You are my princess, Lovebird ❤️',
    'Am glad I found you, Love ❤️',
    'Nakupenda milele, Dolly ❤️',
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    setModalContent(compliment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const lobster = {
  //   fontFamily:'lobster',
  //   fontWeight:'0',
  // }

  const greatVibes = {
    fontFamily:'Great_Vibes',
    fontWeight: '400',
    fontSize:'30px',
  }

  return (
    <>


    <div className='modal-overlay'>
    <button className='btn-pop' onClick={handleClick}>
        {/* <span role="img" aria-label="smiley face"><img src={sunshine} style={{width:'20px'}}/></span> */}
        <span role="img" aria-label="smiley face">🌹</span>
      </button>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p style={greatVibes}>{modalContent}</p>
            <button className='btn-dismiss' onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MyComponent;
