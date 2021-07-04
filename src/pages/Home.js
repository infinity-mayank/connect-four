import React from 'react';
import './home.css';
import avatar1 from '../assets/avatar01.png';
import avatar2 from '../assets/avatar02.png';

function Home(props) {
  const onStartGame = () => {
    props.history.push('/game');
  }

  return (
    <div className="login-wrapper">
      <div className="user-wrapper-1">
        <div className="user-icon-1">
          <img src={avatar1} alt="user-avatar-1"/>
        </div>
        <div className="user-details">
          Player 01
          <input type="text" className="user-name"/>
        </div>
      </div>
      <div className="user-wrapper-2">
        <div className="user-icon-2">
          <img src={avatar2} alt="user-avatar-2"/>
        </div>
        <div className="user-details">
          Player 02
          <input type="text" className="user-name"/>
        </div>
      </div>
      <span className="separator" />
      <button className="start-button" onClick={onStartGame}>
        Start Game
      </button>
    </div>
  );
}

export default Home;
