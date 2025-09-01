import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import PLAYERS from "./constants/players.js";
import getGameboard from "./functions/getGameboard.js";
import getWinner from "./functions/getWinner.js";
import getActivePlayer from "./functions/getActivePlayer.js";

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);

  const gameboard = getGameboard(gameTurns);
  const winner = getWinner(gameboard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onSaveName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onSaveName={handlePlayerNameChange}
          />
        </ol>

        <Gameboard
          onSelectSquare={handleSelectSquare}
          board={gameboard}
        />
      </div>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <Log turns={gameTurns}/>
    </main>
  );

  function handleSelectSquare(row, column) {
    setGameTurns(prevTurns => {
      return [
        {player: getActivePlayer(prevTurns), square: {row, column}},
        ...prevTurns
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, name) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: name
      };
    });
  }
}



export default App
