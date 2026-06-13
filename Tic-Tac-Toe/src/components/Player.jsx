import { useState } from "react";

export default function Player({
  initialPlayer,
  Symbol,
  onChangeName,
  isActive,
}) {
  const [playerName, setPlayerName] = useState(initialPlayer);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    onChangeName(Symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : "null"}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{Symbol}</span>
        </span>
        <button type="button" onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}
