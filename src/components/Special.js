import React, { useState } from 'react';
import './Smile.css';
const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const compliments = [
    '😘Hey girl❤️ I want to hold you again and do stuff with you. Nakumiss sana dolly ❤️😘😘 Nakungoja ❤️',
  ];

  const handleClick = () => {
    const compliment = compliments;
    setModalContent(compliment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const lobster = {
    fontFamily:'lobster',
    fontWeight:'500',
  }

  // const greatVibes = {
  //   fontFamily:'Great_Vibes',
  //   fontWeight: '400',
  //   fontSize:'25px',
  //   color:'white',
  // }

  return (
    <>

    <div className='modal-overlay'>
    <button
     style={{
      transition:'2s ease'
     }}
    className='btn-pop' onClick={handleClick}>
        <span role="img" aria-label="smiley face">🌻</span>
      </button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <p style={{fontFamily:'cursive'}}>To my dolly 😘</p> */}
            <p className='mt-4' style={{fontWeight:'500', marginTop:'6vh', fontSize:'21px'}}>{modalContent}</p>
            <button className='btn-dismiss' style={{fontSize:'25px'}} onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default MyComponent;
