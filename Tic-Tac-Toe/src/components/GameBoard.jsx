import { useState } from "react";
import { WINNING_COMBINATIONS } from "../data";
import GameOver from "./GameOver";

export default function GameBoard({
  onSelectSquare,
  activePlayerSymbol,
  players,
}) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerRow) => [...innerRow]),
      ];
      updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
      return updatedGameBoard;
    });
    onSelectSquare();
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
      break;
    }
  }

  const totalTurnsPlayed = gameBoard
    .flat()
    .filter((symbol) => symbol !== null).length;
  const hasDraw = totalTurnsPlayed === 9 && !winner;

  if (hasDraw) {
    winner = "Draw";
  }

  function handleRestartGame() {
    setGameBoard(initialGameBoard);
  }

  return (
    <>
      <ol id="game-board">
        {winner && <GameOver winner={winner} onSelect={handleRestartGame} />}
        {gameBoard.map((row, rowIdx) => (
          <div key={rowIdx}>
            <ol>
              {row.map((playerSymbol, colIdx) => {
                return (
                  <div key={colIdx}>
                    <button
                      onClick={() => handleSelectSquare(rowIdx, colIdx)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </div>
                );
              })}
            </ol>
          </div>
        ))}
      </ol>
    </>
  );
}
