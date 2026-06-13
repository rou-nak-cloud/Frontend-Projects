import { useState } from "react";
import Player from "./components/Player";

export default function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  // players is used to check the winner based on symbol

  function handlePlayerChangeName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }
  return (
    <>
      <div id="game-container" className="highlight-player">
        <div id="players">
          <Player
            initialPlayer={"Player 1"}
            Symbol={"X"}
            onChangeName={handlePlayerChangeName}
          />
          <Player
            initialPlayer={"Player 2"}
            Symbol={"O"}
            onChangeName={handlePlayerChangeName}
          />
        </div>
      </div>
    </>
  );
}
