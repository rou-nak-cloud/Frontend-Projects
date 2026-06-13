export default function GameOver({ winner, onSelect }) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over</h2>
        {winner === "Draw" ? <p>It's a Draw!!</p> : <p>{winner} Won!!</p>}
        <button onClick={onSelect}>Play Again</button>
      </div>
    </>
  );
}
