import { createSlice } from '@reduxjs/toolkit';
import avatar1 from '../../assets/avatar01.png';
import avatar2 from '../../assets/avatar02.png';

const initializeBoard = () => new Array(8).fill(new Array(8).fill(null));

const initialState = {
  player1: { id: 1, name: 'David', score: 0, avatar: avatar1 },
  player2: { id: 2, name: 'Maria', score: 0, avatar: avatar2 },
  currentPlayer: 1,
  totalGames: 3,
  currentGame: 1,
  tournamentOver: false,
  gameOver: false,
  board: initializeBoard(),
  boardState: []
};


export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateBoard: (state, actions) => {
      state.boardState.push(state.board);
      state.board = actions.payload;
    },
    changeCurrentPlayer: (state) => {
      if(state.currentPlayer === state.player1.id) {
        state.currentPlayer = state.player2.id
      }
      else {
        state.currentPlayer = state.player1.id;
      }
    },
    undoMove: (state) => {
      if(state.boardState.length > 0) {
        state.board = state.boardState.pop();
      }
    },
    onWinning: (state, actions) => {
      if(actions.payload === state.player1.id) {
        state.player1.score += 1;
      }

      if(actions.payload === state.player2.id) {
        state.player2.score += 1;
      }

      if(state.currentGame === state.totalGames) {
        state.tournamentOver = true;
      }
      else {
        state.gameOver = true;
      }
    },
    startGame: (state) => {
      state.board = initializeBoard();
      state.boardState = [];
      state.currentGame += 1;
      state.gameOver = false;
    }
  }
});

export const { updateBoard, changeCurrentPlayer, undoMove, onWinning, startGame } = gameSlice.actions;

export const selectBoard = (state) => state.game.board;

export const selectPlayer1 = (state) => state.game.player1;

export const selectPlayer2 = (state) => state.game.player2;

export const selectCurrentPlayer = (state) => state.game.currentPlayer;

export const selectGameOver = (state) => state.game.gameOver;

export const selectTournamentOver = (state) => state.game.tournamentOver;

export const selectCurrentGame = (state) => state.game.currentGame;

export const selectTotalGames = (state) => state.game.totalGames;

export default gameSlice.reducer;
