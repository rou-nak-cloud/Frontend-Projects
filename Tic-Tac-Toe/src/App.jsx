import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

export default function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  // players is used to check the winner based on symbol

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

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
      <div id="game-container">
        <div id="players" className="highlight-player">
          <Player
            initialPlayer={"Player 1"}
            Symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerChangeName}
          />
          <Player
            initialPlayer={"Player 2"}
            Symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerChangeName}
          />
        </div>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          players={players}
        />
      </div>
    </>
  );
}
