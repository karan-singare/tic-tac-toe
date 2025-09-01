export default function getActivePlayer(turns) {
  return turns.length && turns[0].player === "X" ? "O" : "X"
}
