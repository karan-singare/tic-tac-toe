import INITIAL_GAME_BOARD from "../constants/initial-game-board.js";

export default function getGameboard(gameTurns) {
  const gameboard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, column} = square;
    gameboard[row][column] = player;
  }
  return gameboard;
}
