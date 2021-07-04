import React from 'react';
import './game.css';
import avatar1 from "../assets/avatar01.png";
import avatar2 from "../assets/avatar02.png";

function Game(props) {
  return (
    <div className="game-wrapper">
      <div className="game">

      </div>
      <div className="game-details">
        <p className="tournament-text">3 Games Tournament</p>
        <p className="game-text">Playing Game 1</p>
        <div className="user-wrapper-1">
          <div className="user-icon-1">
            <img src={avatar1} alt="user-avatar-1"/>
          </div>
          <div className="user-details">
            Player 01
          </div>
        </div>
        <div className="user-wrapper-2">
          <div className="user-icon-2">
            <img src={avatar2} alt="user-avatar-2"/>
          </div>
          <div className="user-details">
            Player 02
          </div>
        </div>
        <span className="separator" />
        <button className="undo-button">
          Undo Step
        </button>
        <button className="end-button">
          End Tournament
        </button>
      </div>
    </div>
  );
}

export default Game;
