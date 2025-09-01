export default function Gameboard({onSelectSquare, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => <li key={rowIndex.toString()}>
        <ol>
          {row.map((playerSymbol, columnIndex) => <li key={columnIndex.toString()}>
            <button
              disabled={playerSymbol !== null}
              onClick={() => handleSelectSquare(rowIndex, columnIndex)}>
              {playerSymbol}
            </button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );

  function handleSelectSquare(rowIndex, columnIndex) {
    onSelectSquare(rowIndex, columnIndex);
  }
}
