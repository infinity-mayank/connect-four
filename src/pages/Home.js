import React from 'react';
import './home.css';
import UserAvatar from "../components/UserAvatar";
import { useSelector, useDispatch } from "react-redux";
import {
  changePlayer1Name,
  changePlayer2Name,
  selectPlayer1,
  selectPlayer2,
  startNewGame
} from "../features/game/gameSlice";

function Home(props) {
  const dispatch = useDispatch();
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);

  const onStartGame = () => {
    dispatch(startNewGame());
    props.history.push('/game');
  }

  const onPlayerNameChange = ({ target: { id, value } }) => {
    if(Number(id) === player1.id) {
      dispatch(changePlayer1Name(value));
    }
    else {
      dispatch(changePlayer2Name(value))
    }
  }

  return (
    <div className="login-wrapper">
      <div className="user-wrapper-1">
        <UserAvatar avatar={player1.avatar} userId={player1.id} />
        <div className="user-details">
          Player 01
          <input
            id={player1.id}
            type="text"
            className="user-name"
            onChange={onPlayerNameChange}
            value={player1.name}/>
        </div>
      </div>
      <div className="user-wrapper-2">
        <UserAvatar avatar={player2.avatar} userId={player2.id} />
        <div className="user-details">
          Player 02
          <input
            id={player2.id}
            type="text"
            className="user-name"
            onChange={onPlayerNameChange}
            value={player2.name}/>
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
