import React from "react";

const GameOver = ({ winner, rematchgame }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{`Winner: ${winner}`}</p> : <p>It's a draw!</p>}
      <button onClick={rematchgame}>Play Again</button>
    </div>
  );
};

export default GameOver;
