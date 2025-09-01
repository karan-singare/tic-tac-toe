import {WINNING_COMBINATIONS} from "../constants/winning-combinations.js";
import PLAYERS from "../constants/players.js";

export default function getWinner(gameboard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const symbols = [];
    for (const item of combination) {
      const {row, column} = item;
      if (gameboard[row][column]) {
        symbols.push(gameboard[row][column]);
      }
    }
    if (symbols.length === 3) {
      if (symbols.every(symbol => symbol === PLAYERS.X)) {
        winner = players["X"];
      } else if (symbols.every(symbol => symbol === PLAYERS.O)) {
        winner = players["O"];
      }
    }
  }
  return winner;
}
