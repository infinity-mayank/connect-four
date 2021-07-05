import { createSlice } from '@reduxjs/toolkit'

const initializeBoard = () => {
  let board = [];
  for (let r = 0; r < 8; r++) {
    let row = [];
    for (let c = 0; c < 8; c++) { row.push(null) }
    board.push(row);
  }
  return board;
}

const initialState = {
  player1: { id: 1, name: 'David'},
  player2: { id: 2, name: 'Maria'},
  currentPlayer: 1,
  gameOver: false,
  tournamentCount: 3,
  currentTournament: 1,
  tournamentOver: false,
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
    }
  }
});

export const { updateBoard, changeCurrentPlayer, undoMove } = gameSlice.actions;

export const selectBoard = (state) => state.game.board;

export const selectPlayer1 = (state) => state.game.player1;

export const selectPlayer2 = (state) => state.game.player2;

export const selectCurrentPlayer = (state) => state.game.currentPlayer;

export const selectGameOver = (state) => state.game.gameOver;

export const selectTournamentOver = (state) => state.game.tournamentOver;

export default gameSlice.reducer;
