export default function Log({turns}) {
  return (
    <ol id="log">
      {turns.map(turn => {
        const {square, player} = turn;
        const {row, column} = square;
        const key = `${row}-${column}`;
        return <li key={key}>{player} selected {row}, {column}</li>
      })}
    </ol>
  )
}
