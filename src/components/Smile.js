import React, { useState } from 'react';
import './Smile.css';
import font from '../fonts/Lobster/Lobster-Regular.ttf';
import sunshine from '../img/download.png'
const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const compliments = [
    'You have the most beautiful smile, Baby Doll.',
    'I feel incredibly lucky to have you in my life, Darling.',
    'You are the most intelligent and talented person I know, Sunshine.',
    'Your love and support mean the world to me, Sweetheart.',
    'You are my Heartbeat.',
    'You have a heart of gold, Love.',
    'Your laughter brings me joy, Starlight.',
    'You have a unique and captivating charm, Honeydew.',
    'Your are the reason why everything around me is beautiful, Twinkle Toes.',
    'Your intelligence and quick wit impress me, Cuddlebug.',
    'You have a beautiful soul that shines through, Sweet Cheeks.',
    'You are the definition of beauty, inside and out, Teddy Bear.',
    'Your love and care make this world a better place, Honey.',
    'You are my rock and my best friend, Angel Eyes.',
    'Your smile makes my day brighter, Pumpkin.',
    'You are the most amazing person I know, Cutie Pie.',
    'Your passion and dedication inspire me to be a better person, Lovebird.',
    'You bring so much love and joy into my life, Sweetie.',
    'You prove to me that true love exists, Velvet.',
    'I am so grateful to have you as my girlfriend, Vera.'
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
