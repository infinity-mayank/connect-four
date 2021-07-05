import React from 'react';
import './game.css';
import avatar1 from "../assets/avatar01.png";
import avatar2 from "../assets/avatar02.png";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBoard,
  selectGameOver,
  selectTournamentOver,
  selectCurrentPlayer,
  updateBoard,
  changeCurrentPlayer
} from "../features/game/gameSlice";
import Row from "../components/Row";
import { checkForWin, deepCloneBoard } from "../features/game/gameUtils";
import UserAvatar from "../components/UserAvatar";

function Game() {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const gameOver = useSelector(selectGameOver);
  const tournamentOver = useSelector(selectTournamentOver);
  const currentPlayer = useSelector(selectCurrentPlayer);

  const onPlay = (columnIndex) => {
    if(gameOver && tournamentOver) {
      return;
    }

    if(gameOver && !tournamentOver) {

    }

    if(!gameOver && !tournamentOver) {
      let cloneBoard = deepCloneBoard(board);
      for (let r = 7; r >= 0; r--) {
        debugger;
        if (!cloneBoard[r][columnIndex]) {
          cloneBoard[r][columnIndex] = currentPlayer
          break
        }
      }
      console.log(cloneBoard);

      const result = checkForWin(cloneBoard);
      console.log('RESULT', result);

      dispatch(updateBoard(cloneBoard));
      dispatch(changeCurrentPlayer());
    }
  }

  return (
    <div className="game-wrapper">
      <div className="game">
        <table className="game-table">
          <tbody>
          {
            board.map((row, i) => (
              <Row key={i} row={row} play={onPlay} />
            ))
          }
          </tbody>
        </table>
      </div>
      <div className="game-details">
        <p className="tournament-text">3 Games Tournament</p>
        <p className="game-text">Playing Game 1</p>
        <div className="user-wrapper-1">
          <UserAvatar avatar={avatar1} userId={1} />
          <div className="user-details">
            Player 01
          </div>
        </div>
        <div className="user-wrapper-2">
          <UserAvatar avatar={avatar2} userId={2} />
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
