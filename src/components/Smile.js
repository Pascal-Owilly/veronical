import React, { useState } from 'react';
import './Smile.css';
const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const compliments = [

    'I love your smile, Baby Doll ❤️',
    'I feel lucky to have you, ❤️ Darling', 
    'You have pretty eyes, Sunshine ❤️',
    'You are my Heartbeat, Cuddlebug ❤️',
    'I love kissing you, ❤️ Baby 😘',
    'You are so beautiful, Honeydew ❤️ ',
    'I love your natural beauty, 😘 Teddy Bear',
    'I love your curves, Cutie Pie ❤️',
    'You complete me, Love ❤️',
    ' 😘 I love your natural body, 😘 Velvet ',
    'Am glad you are my girlfriend, Vera 😘 ',
    'You are my better half, Dolly ❤️',
    'You are my missing piece, Starlight ❤️',
    ' You are my princess, Lovebird ❤️',
    'Am glad I found you, Sweetheart ❤️',
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

  const lobster = {
    fontFamily:'Great_Vibes',
    fontWeight:'500',
  }


  const greatVibes = {
    fontFamily:'Great_Vibes',
    fontWeight: '400',
    fontSize:'30px',
  }

  return (
    <>


    <div className='modal-overlay'>
    <button className='btn-pop' onClick={handleClick}>
        <span role="img" aria-label="smiley face">🌹</span>
      </button>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" style={{fontFamily:'cursive', marginTop:'-20px'}} onClick={(e) => e.stopPropagation()}>
            <p style={{fontFamily:'Great_Vibes', marginTop:'10vh', fontSize:'21px'}}>{modalContent}</p>
            <button style={{fontSize:'15px', bottom:'0'}} className='btn-dismiss mt-5' onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MyComponent;
