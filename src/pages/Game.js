import React from 'react';
import './game.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBoard,
  selectTournamentOver,
  selectCurrentPlayer,
  updateBoard,
  changeCurrentPlayer,
  undoMove,
  selectPlayer1,
  selectPlayer2,
  onWinning
} from "../features/game/gameSlice";
import Row from "../components/Row";
import { checkForWin, deepCloneBoard } from "../features/game/gameUtils";
import UserAvatar from "../components/UserAvatar";

function Game(props) {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const tournamentOver = useSelector(selectTournamentOver);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);

  const onPlay = (columnIndex) => {
    if(!tournamentOver) {
      let cloneBoard = deepCloneBoard(board);
      for (let r = 7; r >= 0; r--) {
        if (!cloneBoard[r][columnIndex]) {
          cloneBoard[r][columnIndex] = currentPlayer
          break
        }
      }
      dispatch(updateBoard(cloneBoard));
      dispatch(changeCurrentPlayer());

      const result = checkForWin(cloneBoard);

      if(result) {
        dispatch(onWinning(result))
      }
    }
  }

  const onUndo = () => dispatch(undoMove());

  const onEndTournament = () => props.history.push('/');

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
          <UserAvatar avatar={player1.avatar} userId={player1.id} />
          <div className="user-details">
            Player 01
          </div>
        </div>
        <div className="user-wrapper-2">
          <UserAvatar avatar={player2.avatar} userId={player2.id} />
          <div className="user-details">
            Player 02
          </div>
        </div>
        <span className="separator" />
        <button className="undo-button" onClick={onUndo}>
          Undo Step
        </button>
        <button className="end-button" onClick={onEndTournament}>
          End Tournament
        </button>
      </div>
    </div>
  );
}

export default Game;
