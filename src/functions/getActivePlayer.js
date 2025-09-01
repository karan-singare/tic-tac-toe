import PLAYERS from "../constants/players.js";

export default function getActivePlayer(turns) {
  return turns.length && turns[0].player === PLAYERS.X ? "O" : "X"
}
