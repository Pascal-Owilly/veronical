import React, { useState } from 'react';
import './Smile.css';
import font from '../fonts/Lobster/Lobster-Regular.ttf';
import sunshine from '../img/download.png'
const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const compliments = [
    'Hi love, I made this special app to show you how much I miss you and can\'t wait to hold you in my arms again. I loved you the first day I saw you and I always will ❤️',
  ];

  const handleClick = () => {
    const compliment = compliments;
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
    fontSize:'28px',
    color:'white',
  }

  return (
    <>

    <div className='modal-overlay'>
    <button className='btn-pop' onClick={handleClick}>
        <span role="img" aria-label="smiley face">🌻</span>
        {/* <span role="img" aria-label="smiley face">🌹</span> */}
      </button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p style={greatVibes}>{modalContent}</p>
            <button className='btn-dismiss' style={{fontSize:'40px'}} onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MyComponent;
