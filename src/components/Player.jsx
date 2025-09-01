import {useState} from "react";

export default function Player({initialName, symbol, isActive, onSaveName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (<input required type="text" value={playerName} onChange={handleChange}/>) : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleIsEditing}>{isEditing ? 'Save': 'Update'}</button>
    </li>
  );

  function toggleIsEditing() {
    setIsEditing(prev => !prev);
    if (isEditing) {
      onSaveName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
}
