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
  onWinning,
  selectGameOver,
  selectCurrentGame,
  startGame,
  selectTotalGames
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
  const gameOver = useSelector(selectGameOver);
  const currentGame = useSelector(selectCurrentGame);
  const totalGames = useSelector(selectTotalGames);

  const onPlay = (columnIndex) => {
    if(!tournamentOver && !gameOver) {
      let cloneBoard = deepCloneBoard(board);
      for (let r = 7; r >= 0; r--) {
        if (!cloneBoard[r][columnIndex]) {
          cloneBoard[r][columnIndex] = currentPlayer
          break
        }
      }
      dispatch(updateBoard(cloneBoard));

      const result = checkForWin(cloneBoard);

      if(result) {
        dispatch(onWinning(result))
      }
      else {
        dispatch(changeCurrentPlayer());
      }
    }
  }

  const onUndo = () => dispatch(undoMove());

  const onEndTournament = () => props.history.push('/');

  const onStartGame = () => {
    if(tournamentOver) {
      onEndTournament();
      return;
    }
    dispatch(startGame());
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
        <p className="tournament-text">{totalGames} Games Tournament</p>
        {
          (gameOver || tournamentOver) && <p className="game-over-text">Congratulations!</p>
        }
        <p className="game-text">Playing Game {currentGame}</p>
        <div className="user-wrapper-1">
          <UserAvatar avatar={player1.avatar} userId={player1.id} isActive={player1.id === currentPlayer}/>
          <div className="user-game-details">
            <p className="player-text">Player 01</p>
            <p>{player1.name}</p>
          </div>
          <div className="user-game-details">
            <p className="player-text">Score</p>
            <p>{player1.score}</p>
          </div>
        </div>
        <div className="user-wrapper-2">
          <UserAvatar avatar={player2.avatar} userId={player2.id} isActive={player2.id === currentPlayer}/>
          <div className="user-game-details">
            <p className="player-text">Player 02</p>
            <p>{player2.name}</p>
          </div>
          <div className="user-game-details">
            <p className="player-text">Score</p>
            <p>{player2.score}</p>
          </div>
        </div>
        <span className="separator" />
        {
          gameOver || tournamentOver ?
            <button className="start-undo-button" onClick={onStartGame}>
              Start Game
            </button>
            :
            <button className="start-undo-button" onClick={onUndo}>
              Undo Step
            </button>
        }
        <button className="end-button" onClick={onEndTournament}>
          End Tournament
        </button>
      </div>
    </div>
  );
}

export default Game;
