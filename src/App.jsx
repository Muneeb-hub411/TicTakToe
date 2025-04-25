import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const selectBoardSqaure = (rowIndex, colIndex) => {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
    setGameTurns((prevState) => {
      let currentPlayer = "X";
      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];
      return updatedTurns;
    });
  };
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <Gameboard selectSquare={selectBoardSqaure} turns={gameTurns} />
        </div>
        <Logs turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
