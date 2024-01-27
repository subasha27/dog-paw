import React, { useState } from 'react';
import Logo from '../assets/ticket.png';
import './home.css';
import '../App.css';

function Home() {
  const [logoActive, setLogoActive] = useState(false);

  const handleClick = () => {
    setLogoActive(prevState => !prevState);
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
        <div className={`Logo ${logoActive ? 'active' : ''} ${!logoActive ? 'reverse' : ''}`} onClick={handleClick}>
          <img src={Logo} alt='Logo' height="70" width="70" className={logoActive ? 'spin' : ''} />
        </div>
        <div className={`buttons ${logoActive ? 'active' : ''}`}>
          {/* Add your buttons content here */}
          <div>Button 1</div>
          <div>Button 2</div>
          <div>Button 3</div>
          <div>Button 4</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
