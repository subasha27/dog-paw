import React, { useState } from 'react';
import Logo from '../assets/ticket.png';
import './home.css';
import '../App.css';

function Home() {
  const [logoActive, setLogoActive] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (button) => {
    setLogoActive(prevState => !prevState);
    setActiveButton(button === activeButton ? null : button);

    // Reset activeBox when the logo is clicked
    if (button === null) {
      setActiveBox(null);
    }
  };

  const handleButtonClick = (button) => {
    setActiveBox(button === activeBox ? null : button);
  }

  const renderText = () => {
    switch (activeBox) {
      case 'Button 1':
        return 'Text for Button 1 how is it';
      case 'Button 2':
        return 'Text for Button 2 it can work like this';
      case 'Button 3':
        return 'Text for Button 3 need click the logo near the coin';
      case 'Button 4':
        return 'Text for Button 4';
      default:
        return 'Click a button to see text';
    }
  };

  return (
    <div className='App'>
      <div className="body">

        <section className="sticky">
          <div className={`pawprints ${logoActive ? 'active' : ''}`}>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
            <div className="pawprint"></div>
          </div>
        </section>
        <section className="sticky">
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </section>
        <div className="button-container">
          {/* Two buttons on the left */}
          <div className={`buttons ${logoActive ? 'active' : ''} left-buttons`}>
            <div onClick={() => handleButtonClick('Button 1')}>Button 1</div>
            <div onClick={() => handleButtonClick('Button 2')}>Button 2</div>
          </div>
          <div className={`Logo ${logoActive ? 'active' : ''} ${!logoActive ? 'reverse' : ''}`} onClick={() => handleClick(null)}>
            <img src={Logo} alt='Logo' height="70" width="70" className={logoActive ? 'spin' : ''} />
          </div>
          <div className={`buttons ${logoActive ? 'active' : ''} right-buttons`}>
            <div onClick={() => handleButtonClick('Button 3')}>Button 3</div>
            <div onClick={() => handleButtonClick('Button 4')}>Button 4</div>
          </div>
        </div>
        {activeBox && (
          <div className="text-box" style={{ display: activeBox ? 'block' : 'none' }}>
            {renderText()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
